'use client';

import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  projected: { x: number; y: number };
}

interface Connection {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export default function TechGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    setCanvasSize();

    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().height;
    const radius = Math.min(width, height) * 0.35;
    const centerX = width / 2;
    const centerY = height / 2;

    // Generate points on sphere using Fibonacci sphere algorithm
    const numPoints = 150;
    const points: Point3D[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      const x = radius * Math.sin(inclination) * Math.cos(azimuth);
      const y = radius * Math.sin(inclination) * Math.sin(azimuth);
      const z = radius * Math.cos(inclination);

      points.push({ x, y, z, projected: { x: 0, y: 0 } });
    }

    // Create connections between nearby points
    const connections: Connection[] = [];
    const maxConnections = 80;
    const connectionDistance = radius * 0.6;

    for (let i = 0; i < maxConnections; i++) {
      let from, to;
      let attempts = 0;
      
      do {
        from = Math.floor(Math.random() * numPoints);
        to = Math.floor(Math.random() * numPoints);
        
        const dx = points[from].x - points[to].x;
        const dy = points[from].y - points[to].y;
        const dz = points[from].z - points[to].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        attempts++;
        if (distance < connectionDistance && from !== to) break;
      } while (attempts < 50);

      if (attempts < 50) {
        connections.push({
          from,
          to,
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.004,
        });
      }
    }

    let rotation = 0;
    const rotationSpeed = 0.003;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Project 3D point to 2D
    const project = (point: Point3D, rot: number): { x: number; y: number; z: number } => {
      // Rotate around Y axis
      const cosY = Math.cos(rot);
      const sinY = Math.sin(rot);
      const x = point.x * cosY - point.z * sinY;
      const z = point.x * sinY + point.z * cosY;
      
      // Rotate slightly around X axis for better angle
      const angleX = 0.2;
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y = point.y * cosX - z * sinX;
      const zFinal = point.y * sinX + z * cosX;

      return { x: x + centerX, y: y + centerY, z: zFinal };
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        rotation += rotationSpeed;
      }

      // Project all points
      const projectedPoints = points.map(p => project(p, rotation));

      // Draw connections with glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(10, 28, 46, 0.8)';

      connections.forEach(conn => {
        const from = projectedPoints[conn.from];
        const to = projectedPoints[conn.to];

        // Only draw if both points are on visible side (z > -radius/2)
        if (from.z > -radius / 2 && to.z > -radius / 2) {
          // Base connection line
          ctx.strokeStyle = 'rgba(16, 42, 67, 0.3)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();

          // Animated pulse along the line
          if (!prefersReducedMotion) {
            conn.progress += conn.speed;
            if (conn.progress > 1) conn.progress = 0;
          }

          const pulseX = from.x + (to.x - from.x) * conn.progress;
          const pulseY = from.y + (to.y - from.y) * conn.progress;

          // Glowing pulse
          const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 8);
          gradient.addColorStop(0, 'rgba(10, 28, 46, 0.9)');
          gradient.addColorStop(0.5, 'rgba(16, 42, 67, 0.6)');
          gradient.addColorStop(1, 'rgba(36, 59, 83, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw points
      ctx.shadowBlur = 10;
      projectedPoints.forEach(p => {
        // Size based on depth (z-position)
        const depth = (p.z + radius) / (radius * 2);
        const size = 1.5 + depth * 2;
        const alpha = 0.3 + depth * 0.5;

        ctx.fillStyle = `rgba(10, 28, 46, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw subtle globe outline/glow
      ctx.shadowBlur = 25;
      ctx.shadowColor = 'rgba(10, 28, 46, 0.4)';
      ctx.strokeStyle = 'rgba(16, 42, 67, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    />
  );
}
