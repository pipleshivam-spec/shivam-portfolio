import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const BackgroundShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { currentColor } = useTheme();
  const colorRef = useRef(currentColor.shaderVec3);

  useEffect(() => {
    colorRef.current = currentColor.shaderVec3;
  }, [currentColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec3 u_accentColor;
varying vec2 v_texCoord;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

float line(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
}

void main() {
    vec2 uv = v_texCoord;
    vec2 p = (uv - 0.5) * 2.0;
    p.x *= u_resolution.x / u_resolution.y;
    
    // Background color (Deep Charcoal)
    vec3 color = vec3(0.04, 0.04, 0.05);
    
    // Grid system
    float gridSize = 8.0;
    vec2 g_uv = uv * gridSize;
    vec2 id = floor(g_uv);
    vec2 f_uv = fract(g_uv) - 0.5;
    
    // Dynamic Accent Color
    vec3 accent = u_accentColor;
    
    // Nodes and connections
    for(float y = -1.0; y <= 1.0; y++) {
        for(float x = -1.0; x <= 1.0; x++) {
            vec2 offs = vec2(x, y);
            vec2 currentId = id + offs;
            
            // Random movement for nodes
            float n = hash(currentId);
            vec2 pos = offs + vec2(sin(u_time * 0.5 + n * 6.28), cos(u_time * 0.5 + n * 6.28)) * 0.3;
            
            // Draw points
            float dist = length(f_uv - pos);
            float point = smoothstep(0.03, 0.02, dist);
            color += point * accent * 0.55;
            
            // Draw connections to neighbors
            if(n > 0.5) {
                vec2 neighborId = currentId + vec2(1.0, 0.0);
                float n2 = hash(neighborId);
                vec2 pos2 = vec2(1.0, 0.0) + vec2(sin(u_time * 0.5 + n2 * 6.28), cos(u_time * 0.5 + n2 * 6.28)) * 0.3;
                float l = line(f_uv, pos, pos2);
                color += smoothstep(0.015, 0.0, l) * accent * 0.12 * (0.5 + 0.5 * sin(u_time + n * 10.0));
            }
        }
    }
    
    // Subtle vignette
    color *= 1.0 - length(p) * 0.3;
    
    gl_FragColor = vec4(color, 1.0);
}`;

    function createShader(type: number, src: string) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, src);
      gl!.compileShader(shader);
      return shader;
    }

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uAccent = gl.getUniformLocation(program, 'u_accentColor');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (t: number) => {
      if (!gl || !canvas) return;
      if (typeof ResizeObserver === 'undefined') syncSize();

      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      if (uAccent) gl.uniform3f(uAccent, colorRef.current[0], colorRef.current[1], colorRef.current[2]);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver && canvas) {
        resizeObserver.unobserve(canvas);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full opacity-35 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
