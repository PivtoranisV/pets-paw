'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import sortUp from '../public/sorting-up.svg';
import sortDown from '../public/sorting-down.svg';
import { fetchBreeds } from '@/util';

const FilterBreeds = ({
  selectedLimit,
  setSelectedLimit,
  selectedBreed,
  setSelectedBreed,
}) => {
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
    <>
      <select
        className="px-[10px] py-[6px] border-[#FF868E33] border-solid border-2 rounded-[10px] bg-background text-primary text-md outline-none"
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <option value="">All Breeds</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.name}>
            {breed.name}
          </option>
        ))}
      </select>
      <select
        className="px-[10px] py-[6px] border-[#FF868E33] border-solid border-2 rounded-[10px] bg-background text-primary text-md outline-none"
        value={selectedLimit}
        onChange={(e) => setSelectedLimit(e.target.value)}
      >
        <option value="5">Limit: 5</option>
        <option value="10">Limit: 10</option>
        <option value="15">Limit: 15</option>
        <option value="20">Limit: 20</option>
      </select>
      <button className="w-[40px] h-[40px] bg-background rounded-[10px] flex items-center justify-center hover:border-[#FF868E33] hover:border-solid hover:border-2">
        <Image src={sortUp} alt="sorting icon" />
      </button>
      <button className="w-[40px] h-[40px] bg-background rounded-[10px] flex items-center justify-center hover:border-[#FF868E33] hover:border-solid hover:border-2">
        <Image src={sortDown} alt="sorting icon" />
      </button>
    </>
  );
};

export default FilterBreeds;
