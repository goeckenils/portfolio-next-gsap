
import { NextPage } from 'next';
import { Metadata } from 'next';

interface WorkProps {

}

export const metadata: Metadata = {
    title: 'WORK',
    description: 'Page Description',
    keywords: 'Page Keywords',
};

const Work: NextPage<WorkProps> = ({  }) => {
  return (
    <div>
        <h1>WORK <sub>(03)</sub></h1>
    </div>
  );
};

export default Work;