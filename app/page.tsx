import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Page = () => {
  return ( 
    <div className='wrapper navbar-height py-4 flex justify-between items-center'>
      <Link href="/" className="flex gap-0.5 items-center">
          <Image src="/assets/logo.png" alt="readify" width={42} height={26}/>
      </Link>
    </div>
   );
}
 
export default Page;