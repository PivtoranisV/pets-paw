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
          <div className="h-[360px] relative w-full mb-6">
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
        <fieldset className="border-2 border-[#FF868E33] rounded-[20px] pb-10 mb-[75px]">
          <legend className="text-center px-[40px] mb-[49px] text-larger">
            {breedDetails && breedDetails[0].breeds[0].name}
          </legend>
          <div className="flex text-md font-normal justify-between px-10">
            <div>
              <h2 className="font-medium">Temperament:</h2>
              <p className="text-primary">
                {breedDetails && breedDetails[0].breeds[0].temperament}
              </p>
            </div>
            <div className="font-normal">
              <h2 className="font-medium">
                Origin:{' '}
                <span className="text-primary">
                  {breedDetails && breedDetails[0].breeds[0].origin}
                </span>
              </h2>
              <h2 className="font-medium">
                Weight:{' '}
                <span className="text-primary">
                  {breedDetails && breedDetails[0].breeds[0].weight.metric} kgs
                </span>
              </h2>
              <h2 className="font-medium">
                Life span:{' '}
                <span className="text-primary">
                  {breedDetails && breedDetails[0].breeds[0].life_span} years
                </span>
              </h2>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default BreedDetail;
