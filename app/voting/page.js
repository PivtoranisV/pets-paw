'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import SearchBar from '@/components/SearchBar';
import arrow from '../../public/arrowLeft.svg';
import UserAction from '@/components/UserAction';

const ImageLoader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <p className="text-base font-medium tracking-[2px] text-primary text-center">
        Cat image is loading...
      </p>
    );
  }

  return null;
};

const apiKey = process.env.API_KEY;

const Voting = () => {
  const router = useRouter();
  const [randomCat, setRandomCat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCat = async () => {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?api_key=' + apiKey
      );
      const data = await response.json();
      setRandomCat(data[0]);
      setIsLoading(false);
    };
    fetchCat();
  }, []);

  return (
    <div className="ml-[108px] mt-[30px]">
      <SearchBar />
      <div className="h-[782px] bg-background rounded-[20px] p-5 mt-[10px]">
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
        <UserAction catId={randomCat?.id} />
      </div>
    </div>
  );
};

export default Voting;
