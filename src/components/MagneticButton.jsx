import { useEffect, useRef } from 'react';
import clsx from 'clsx';

export default function MagneticButton({ className, strength = 18, children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.setProperty('--mx', `${(x / rect.width) * strength}px`);
      el.style.setProperty('--my', `${(y / rect.height) * strength}px`);
    };

    const onLeave = () => {
      el.style.setProperty('--mx', `0px`);
      el.style.setProperty('--my', `0px`);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <button
      ref={ref}
      className={clsx(
        'magnetic inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
