import { NextPage } from 'next';
import { Metadata } from 'next';
import IntroductionSection from '../sections/Introduction/Introduction';

interface IntroductionProps {}

export const metadata: Metadata = {
  title: 'Introduction',
  description: 'Page Description',
  keywords: 'Page Keywords',
};

const Introduction: NextPage<IntroductionProps> = ({}) => {
  return <IntroductionSection />;
};

export default Introduction;
