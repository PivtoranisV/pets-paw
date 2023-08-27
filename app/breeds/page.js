'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import SearchBar from '@/components/SearchBar';
import ImageLoader from '@/components/ImageLoader';
import arrow from '../../public/arrowLeft.svg';
import { fetchBreedsCats } from '@/util';
import FilterBreeds from '@/components/FilterBreeds';

const Breeds = () => {
  const router = useRouter();

  const [breedCats, setBreedCats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedLimit, setSelectedLimit] = useState('5');

  useEffect(() => {
    setIsLoading(true);
    const fetchCats = async () => {
      try {
        const breedData = await fetchBreedsCats(selectedLimit);
        setBreedCats(breedData);
      } catch (error) {
        console.error('Error fetching cat:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCats();
  }, [selectedLimit]);

  const filteredBreedCats = breedCats?.filter((breed) => {
    if (!selectedBreed) {
      return true;
    }
    const breedName = breed.breeds[0].name.toLowerCase();
    return breedName.includes(selectedBreed.toLowerCase());
  });

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
          <div className="h-[40px] w-[146px] rounded-[10px] flex flex-col items-center justify-center bg-secondary">
            <span className="text-base font-medium tracking-[2px]">BREEDS</span>
          </div>
          <FilterBreeds
            selectedBreed={selectedBreed}
            setSelectedBreed={setSelectedBreed}
            selectedLimit={selectedLimit}
            setSelectedLimit={setSelectedLimit}
          />
        </div>
        <div className="mt-[25px]">
          <ImageLoader isLoading={isLoading} />
          <div className="grid grid-cols-3 gap-5">
            {filteredBreedCats?.map((breed) => (
              <div className="relative" key={breed.id}>
                <Image
                  src={breed.url}
                  alt="cat image"
                  width={300}
                  height={140}
                  className="rounded-[10px]"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-[#FF868E99] text-secondary opacity-0 hover:opacity-100 transition-opacity duration-300 p-[10px]">
                  <span className="bg-white py-[5px] px-[42px] rounded-[10px]">
                    {breed.breeds[0].name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breeds;
