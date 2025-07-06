
import { useEffect, useState } from 'react';

export default function MatrixRain() {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-green-400 text-xs opacity-20 animate-matrix font-mono"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            top: '-10vh'
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="block">
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
