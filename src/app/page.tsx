import { NextPage } from 'next';
import { Metadata } from 'next';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Button from '@/components/Button/Button';
import coverImg from '@/app/assets/images/hero.png';
import { useGSAP } from '@gsap/react';
import TransitionLink from '@/components/TransitionLink/TransitionLink';

interface HomeProps {}

export const metadata: Metadata = {
  title: 'Home Title',
  description: 'Home Description',
  keywords: 'Home Keywords',
};

const HomeName: NextPage<HomeProps> = ({}) => {
  return (
    <div className="Home">
      <div className="flex-container">
        <AnimatedText text="NILS GOECKE" />
        <AnimatedText delay={0.3} text="WEBDEVELOPER&" />
        <AnimatedText delay={0.6} text="DIGITAL DESIGNER" />
        <Image src={coverImg} alt="Cover Image" className="bg-img" />
        <Link href="/work">
          <h1 className="hero-text"></h1>
        </Link>
        <Button marginTop={24} text="SEE PORTFOLIO" />
        <TransitionLink href="/work" label="SEE PORTFOLIO" />
      </div>
    </div>
  );
};

export default HomeName;
