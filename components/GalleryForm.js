'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import reloadIcon from '../public/reload.svg';
import { fetchBreeds } from '@/util';

const GalleryForm = ({ onModification }) => {
  const [breeds, setBreeds] = useState([]);
  const [order, setOrder] = useState('rand');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [limit, setLimit] = useState(5);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    onModification(breed, order, type, limit);
    console.log(breed, order, type, limit);
  };

  return (
    <form
      className="bg-background pt-[10px] pb-5 px-5 rounded-[20px] w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-[20px]">
        <div className="w-full">
          <label className="text-primary font-medium text-xsm ml-[10px]">
            ORDER
          </label>
          <select
            className="w-full py-2 px-[10px] bg-[#1D1D1D] rounded-[10px] focus:outline-none focus:border-secondary focus:border"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="rand">Random</option>
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>
        </div>
        <div className="w-full">
          <label className="text-primary font-medium text-xsm ml-[10px]">
            TYPE
          </label>
          <select
            className="w-full py-2 px-[10px] bg-[#1D1D1D] rounded-[10px] focus:outline-none focus:border-secondary focus:border"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All</option>
            <option value="jpg">Static</option>
            <option value="gif">Animated</option>
          </select>
        </div>
      </div>
      <div className="flex gap-[20px] items-end">
        <div className="w-full">
          <label className="text-primary font-medium text-xsm ml-[10px]">
            BREED
          </label>
          <select
            className="w-full py-2 px-[10px] bg-[#1D1D1D] rounded-[10px] focus:outline-none focus:border-secondary focus:border"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="text-primary font-medium text-xsm ml-[10px]">
            LIMIT
          </label>
          <select
            className="w-full py-2 px-[10px] bg-[#1D1D1D] rounded-[10px] focus:outline-none focus:border-secondary focus:border"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={15}>15 items per page</option>
            <option value={20}>20 items per page</option>
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
