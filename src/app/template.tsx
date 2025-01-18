'use client';

import { useEffect } from 'react';
import { animatePageIn } from '@/components/Transition/Transition';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div className="menu-overlay"></div>
      {children}
    </div>
  );
}
