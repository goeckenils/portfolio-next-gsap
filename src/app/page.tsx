import { NextPage } from 'next';
import { Metadata } from 'next';
import Image from 'next/image';
interface HomeProps {

}

export const metadata: Metadata = {
    title: 'Home Title',
    description: 'Home Description',
    keywords: 'Home Keywords',
};

const HomeName: NextPage<HomeProps> = ({  }) => {
  return (
    <div className='page-content hero'>
        <h1>INDEX <sub>(01)</sub></h1>
        
    </div>
  );
};

export default HomeName;