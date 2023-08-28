'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import SearchBar from '@/components/SearchBar';
import ImageLoader from '@/components/ImageLoader';
import arrow from '../../public/arrowLeft.svg';
import { fetchGalleryCats } from '@/util';
import GalleryForm from '@/components/GalleryForm';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const Gallery = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [modification, setModification] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchCats = async () => {
      try {
        const breedData = await fetchGalleryCats();
        setModification(breedData);
      } catch (error) {
        console.error('Error fetching cat:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCats();
  }, []);

  const handleModifications = async (breedId, order, type, limit) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breedId}&order=${order}&mime_types=${type}&api_key=${apiKey}`
    );
    const data = await response.json();
    setModification(data);
  };

  return (
    <div className="ml-[108px] mt-[30px]">
      <SearchBar />
      <div className="bg-background rounded-[20px] p-5 mt-[10px] max-w-[680px]">
        <div className="flex gap-[10px] mb-5">
          <button type="button" onClick={() => router.back()}>
            <div className="w-[40px] h-[40px] bg-[#FF868E33] flex items-center justify-center rounded-[10px]">
              <Image src={arrow} alt="left arrow" />
            </div>
          </button>
          <div className="h-[40px] w-[146px] rounded-[10px] flex flex-col items-center justify-center bg-secondary">
            <span className="text-base font-medium tracking-[2px]">
              GALLERY
            </span>
          </div>
        </div>
        <GalleryForm onModification={handleModifications} />
        <div className="mt-[25px]">
          <ImageLoader isLoading={isLoading} />
          <div className="grid grid-cols-3 gap-5">
            {modification?.map((breed) => (
              <div className="relative" key={breed.id}>
                <Image
                  src={breed.url}
                  alt="cat image"
                  width={300}
                  height={140}
                  className="rounded-[10px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
