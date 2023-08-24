'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import arrow from '../../public/arrowLeft.svg';

const Voting = () => {
  const router = useRouter();

  return (
    <div className="w-[680px] ml-[108px] mt-[30px]">
      <SearchBar />
      <div className="w-[680px] h-[782px] bg-background rounded-[20px] p-5 mt-[10px]">
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
      </div>
    </div>
  );
};

export default Voting;
