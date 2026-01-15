import { useEffect, useMemo, useRef, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

/**
 * Simple scramble animation (react-bits-ish) without extra deps.
 * Cycles through phrases.
 */
export default function TextScramble({ phrases = [], className = '', intervalMs = 2200 }) {
  const [text, setText] = useState(phrases[0] ?? '');
  const frame = useRef(0);
  const queue = useRef([]);
  const raf = useRef(null);
  const idx = useRef(0);

  const randomChar = useMemo(() => () => CHARS[Math.floor(Math.random() * CHARS.length)], []);

  const setPhrase = (newText) => {
    const oldText = text;
    const length = Math.max(oldText.length, newText.length);
    queue.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.current.push({ from, to, start, end, char: '' });
    }
    frame.current = 0;
    cancelAnimationFrame(raf.current);
    update();
  };

  const update = () => {
    let output = '';
    let complete = 0;
    for (let i = 0; i < queue.current.length; i++) {
      let { from, to, start, end, char } = queue.current[i];
      if (frame.current >= end) {
        complete++;
        output += to;
      } else if (frame.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queue.current[i].char = char;
        }
        output += `<span class="opacity-60">${char}</span>`;
      } else {
        output += from;
      }
    }

    setText(output);

    frame.current++;
    if (complete === queue.current.length) return;
    raf.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    if (!phrases.length) return;
    setText(phrases[0]);
    setPhrase(phrases[0]);

    const t = setInterval(() => {
      idx.current = (idx.current + 1) % phrases.length;
      setPhrase(phrases[idx.current]);
    }, intervalMs);

    return () => {
      clearInterval(t);
      cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.join('|'), intervalMs]);

  return (
    <span
      className={className}
      // output contains spans for scramble effect
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
