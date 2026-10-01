import { useEffect, useRef, useState } from 'react';

// Animated number counter — counts up to `value` over `duration` ms
export function AnimatedNumber({
  value,
  duration = 1000,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}: {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number>(0);
  const startTime = useRef<number>(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    startTime.current = 0;
    const animate = (time: number) => {
      if (!startTime.current) startTime.current = time;
      const progress = Math.min((time - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = ref.current + (value - ref.current) * eased;
      setDisplay(current);
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        ref.current = value;
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
