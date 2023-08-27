'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import arrow from '../../../public/arrowLeft.svg';
import SearchBar from '@/components/SearchBar';
import ImageLoader from '@/components/ImageLoader';
import { fetchBreedId } from '@/util';

const BreedDetail = ({ params }) => {
  const router = useRouter();
  const [breedDetails, setBreedDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchBreedDetails = async () => {
      try {
        const breedData = await fetchBreedId(params.breed_id);
        setBreedDetails(breedData);
      } catch (error) {
        console.error('Error fetching cat:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBreedDetails();
  }, [params]);

  return (
    <div className="ml-[108px] mt-[30px]">
      <SearchBar />
      <div className="bg-background rounded-[20px] p-5 mt-[10px] max-w-[680px]">
        <div className="flex gap-[10px]">
          <button type="button" onClick={() => router.back()}>
            <div className="w-[40px] h-[40px] bg-[#FF868E33] flex items-center justify-center rounded-[10px]">
              <Image src={arrow} alt="left arrow" />
            </div>
          </button>
          <div className="h-[40px] w-[146px] rounded-[10px] flex flex-col items-center justify-center bg-[#FF868E33]">
            <span className="text-base font-medium tracking-[2px] text-secondary">
              BREEDS
            </span>
          </div>
          <div className="h-[40px] w-[90px] rounded-[10px] flex flex-col items-center justify-center bg-secondary">
            <span className="text-base font-medium tracking-[2px] text-white">
              {params.breed_id}
            </span>
          </div>
        </div>
        <div className="mt-[25px]">
          <ImageLoader isLoading={isLoading} />
          <div className="h-[360px] relative w-full">
            {breedDetails && (
              <Image
                src={breedDetails[0].url}
                fill
                alt="cat"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDetail;
