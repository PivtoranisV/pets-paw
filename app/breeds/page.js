'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import SearchBar from '@/components/SearchBar';
import arrow from '../../public/arrowLeft.svg';
import { fetchBreeds } from '@/util';

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

const Breeds = () => {
  const router = useRouter();
  const [breeds, setBreeds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCats = async () => {
      try {
        const breedData = await fetchBreeds();
        setBreeds(breedData);
      } catch (error) {
        console.error('Error fetching cat:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCats();
  }, []);

  console.log(breeds);

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
            <span className="text-base font-medium tracking-[2px]">BREEDS</span>
          </div>
        </div>
        <div className="mt-[25px]">
          <ImageLoader isLoading={isLoading} />
          {/* <div className="h-[360px] relative w-full">
            {randomCat && (
              <Image
                src={randomCat.url}
                fill
                alt="cat"
                className="object-cover"
              />
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Breeds;
