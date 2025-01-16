
import { NextPage } from 'next';
import { Metadata } from 'next';

interface IntroductionProps {

}

export const metadata: Metadata = {
    title: 'Introduction',
    description: 'Page Description',
    keywords: 'Page Keywords',
};

const Introduction: NextPage<IntroductionProps> = ({  }) => {
  return (
    <div>
        <h1>INTRODUCTION <sub>(02)</sub></h1>
    </div>
  );
};

export default Introduction;