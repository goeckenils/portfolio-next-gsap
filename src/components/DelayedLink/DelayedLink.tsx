'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface DelayedLinkProps {
  href: string;
  delay?: number;
  children: React.ReactNode;
  className?: string;
  onAnimationStart?: () => void;
}

const DelayedLink: React.FC<DelayedLinkProps> = ({
  href,
  delay = 500,
  children,
  className,
  onAnimationStart,
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevent immediate navigation

    if (onAnimationStart) {
      onAnimationStart(); // Trigger reverse animation
    }

    setTimeout(() => {
      router.push(href); // Navigate after delay
    }, delay);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default DelayedLink;
