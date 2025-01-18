'use client';

import { useRouter } from 'next/navigation';
import { animatePageOut } from '@/components/Transition/Transition';
import Link from 'next/link';

export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <Link href={href} onClick={handleClick}>
      {label}
    </Link>
  );
}
