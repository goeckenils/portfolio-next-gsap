import { NextPage } from 'next';
import { Metadata } from 'next';
import WorkSection from '../sections/work/Work';

interface WorkProps {}

export const metadata: Metadata = {
  title: 'WORK',
  description: 'Page Description',
  keywords: 'Page Keywords',
};

const Work: NextPage<WorkProps> = ({}) => {
  return (
    <div>
      <WorkSection />
    </div>
  );
};

export default Work;
