'use client';
import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/components/Transition/Transition';

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button className="transition-link" onClick={(e) => handleClick(e)}>
      {label}
    </button>
  );
};

export default TransitionLink;
