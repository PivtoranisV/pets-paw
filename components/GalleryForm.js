'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import reloadIcon from '../public/reload.svg';
import { fetchBreeds } from '@/util';

const GalleryForm = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchAllBreeds = async () => {
      try {
        const breedData = await fetchBreeds();
        setBreeds(breedData);
      } catch (error) {
        console.error('Error fetching cat:', error);
      }
    };
    fetchAllBreeds();
  }, []);

  return (
    <form className="bg-background pt-[10px] pb-5 px-5 rounded-[20px] w-full">
      <div className="flex gap-[20px]">
        <div className="w-full">
          <label className="text-primary font-medium text-xsm ml-[10px]">
            ORDER
          </label>
          <select className="w-full py-2 px-[10px] bg-[#1D1D1D] rounded-[10px] focus:outline-none focus:border-secondary focus:border">
            <option value="">Random</option>
            <option value="">Desc</option>
            <option value="">Asc</option>
          </select>
        </div>
        <div className="w-full">
          <label className="text-primary font-medium text-xsm ml-[10px]">
            TYPE
          </label>
          <select className="w-full py-2 px-[10px] bg-[#1D1D1D] rounded-[10px] focus:outline-none focus:border-secondary focus:border">
            <option value="">All</option>
            <option value="">Static</option>
            <option value="">Animated</option>
          </select>
        </div>
      </div>
      <div className="flex gap-[20px] items-end">
        <div className="w-full">
          <label className="text-primary font-medium text-xsm ml-[10px]">
            BREED
          </label>
          <select className="w-full py-2 px-[10px] bg-[#1D1D1D] rounded-[10px] focus:outline-none focus:border-secondary focus:border">
            <option value="">All Breeds</option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.name}>
                {breed.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="text-primary font-medium text-xsm ml-[10px]">
            LIMIT
          </label>
          <select className="w-full py-2 px-[10px] bg-[#1D1D1D] rounded-[10px] focus:outline-none focus:border-secondary focus:border">
            <option>5 items per page</option>
            <option>10 items per page</option>
            <option>15 items per page</option>
            <option>20 items per page</option>
          </select>
        </div>
        <button type="submit" className="bg-[#1D1D1D] rounded-[10px]">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image src={reloadIcon} alt="reload icon" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default GalleryForm;
