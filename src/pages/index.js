import HomepageDesktop from '@/components/Homepage-dekstop'
import HomepageMobile from '@/components/Homepage-mobile';
import useWindowSize from '@/Hooks/useWindowSize'
import { useEffect,useState } from 'react';
import Movie from "@/pages/movie";


export default function Home() {
  const size = useWindowSize();

  return (
    <div className='bg-[#252525]'>
      {size.width>=1000 && <HomepageDesktop/>}
      {size.width<1000 && <HomepageMobile width={size.width}/>}
    </div>
    // For Displaying Movie Page
    // <Movie/> 
  );
}