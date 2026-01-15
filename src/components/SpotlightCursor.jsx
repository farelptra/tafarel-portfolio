import { useEffect, useRef } from 'react';

export default function SpotlightCursor({ size = 500, opacity = 0.12 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      el.style.setProperty('--sx', `${x}px`);
      el.style.setProperty('--sy', `${y}px`);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(${size}px ${size}px at var(--sx, 50%) var(--sy, 20%), rgba(255,255,255,${opacity}), transparent 60%)`,
      }}
    />
  );
}
