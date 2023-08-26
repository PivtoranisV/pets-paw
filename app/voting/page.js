'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import SearchBar from '@/components/SearchBar';
import ImageLoader from '@/components/ImageLoader';
import arrow from '../../public/arrowLeft.svg';
import UserAction from '@/components/UserAction';
import { fetchCat } from '@/util';

const Voting = () => {
  const router = useRouter();
  const [randomCat, setRandomCat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRandomCat = async () => {
      try {
        const catData = await fetchCat();
        setRandomCat(catData);
      } catch (error) {
        console.error('Error fetching cat:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRandomCat();
  }, []);

  return (
    <div className="ml-[108px] mt-[30px]">
      <SearchBar />
      <div className="bg-background rounded-[20px] p-5 mt-[10px]">
        <div className="flex gap-[10px]">
          <button type="button" onClick={() => router.back()}>
            <div className="w-[40px] h-[40px] bg-[#FF868E33] flex items-center justify-center rounded-[10px]">
              <Image src={arrow} alt="left arrow" />
            </div>
          </button>
          <div className="h-[40px] w-[146px] rounded-[10px] flex flex-col items-center justify-center bg-secondary">
            <span className="text-base font-medium tracking-[2px]">VOTING</span>
          </div>
        </div>
        <div className="mt-[25px]">
          <ImageLoader isLoading={isLoading} />
          <div className="h-[360px] relative w-full">
            {randomCat && (
              <Image
                src={randomCat.url}
                fill
                alt="cat"
                className="object-cover"
              />
            )}
          </div>
        </div>
        <UserAction catId={randomCat?.id} setRandomCat={setRandomCat} />
      </div>
    </div>
  );
};

export default Voting;
