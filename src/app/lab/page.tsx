
import { NextPage } from 'next';
import { Metadata } from 'next';

interface LabProps {

}

export const metadata: Metadata = {
    title: 'LAB',
    description: 'Page Description',
    keywords: 'Page Keywords',
};

const Lab: NextPage<LabProps> = ({  }) => {
  return (
    <div>
           <h1>LAB <sub>(04)</sub></h1>
    </div>
  );
};

export default Lab;