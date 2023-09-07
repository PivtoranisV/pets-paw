'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import SearchBar from '@/components/SearchBar';
import ImageLoader from '@/components/ImageLoader';
import arrow from '../../public/arrowLeft.svg';
import { fetchFavorites } from '@/util';

const Favorite = () => {
  const router = useRouter();

  const [favoritesCats, setFavoritesCats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCats = async () => {
      try {
        const breedData = await fetchFavorites();
        setFavoritesCats(breedData);
      } catch (error) {
        console.error('Error fetching cat:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCats();
  }, []);

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
            <span className="text-base font-medium tracking-[2px]">
              FAVORITES
            </span>
          </div>
        </div>
        <div className="mt-[25px]">
          <ImageLoader isLoading={isLoading} />
          <div className="grid grid-cols-3 gap-5">
            {favoritesCats?.map((cat) => (
              <div className="relative h-44" key={cat.image.id}>
                <Image
                  src={cat.image.url}
                  alt="cat image"
                  fill
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

export default Favorite;
