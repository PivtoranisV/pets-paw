'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import petsPaw from '../public/petsPaw.svg';
import logo from '../public/group.svg';
import voteTable from '../public/voteTable.png';
import cat from '../public/cat.png';
import hand from '../public/hand.png';

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <header className="flex flex-col pl-[147px] pt-[30px] fixed left-0 top-0">
      <div className="flex gap-2">
        <Image src={logo} alt="logo" />
        <Image src={petsPaw} alt="logo" />
      </div>
      <div className="mt-20">
        <h1 className="text-lg font-medium">Hi!👋</h1>
        <p className="text-primary text-base">
          Welcome to MacPaw Bootcamp 2023
        </p>
        <p className="text-base font-medium mt-[60px]">
          Lets start using The Cat API
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/voting" className="flex flex-col gap-[10px]">
          <div
            className={`bg-[#B4B7FF] h-[198px] w-[138px] border-solid border-4 rounded-[20px] flex flex-col items-center justify-center hover:border-white ${
              currentRoute === '/voting'
                ? 'border-secondary-100'
                : 'border-[#FFFFFF99]'
            }`}
          >
            <Image
              src={voteTable}
              alt="vote table"
              className="w-[100px] h-[124.468px]"
            />
          </div>
          <div
            className={`h-[36px] w-[138px] rounded-[10px] flex flex-col items-center justify-center hover:bg-secondary-100 ${
              currentRoute === '/voting' ? 'bg-secondary' : 'bg-[#FFFFFF1A]'
            }`}
          >
            <span
              className={`text-sm font-medium tracking-[2px] ${
                currentRoute === '/voting' ? 'text-white' : 'text-secondary'
              }`}
            >
              VOTING
            </span>
          </div>
        </Link>
        <Link href="/breeds" className="flex flex-col gap-[10px]">
          <div
            className={`bg-[#97EAB9] h-[198px] w-[138px] border-solid border-4 rounded-[20px] flex flex-col items-center justify-center hover:border-white ${
              currentRoute === '/breeds'
                ? 'border-secondary-100'
                : 'border-[#FFFFFF99]'
            }`}
          >
            <Image
              src={cat}
              alt="vote table"
              className="w-[100px] h-[124.468px]"
            />
          </div>
          <div
            className={`h-[36px] w-[138px] rounded-[10px] flex flex-col items-center justify-center hover:bg-secondary-100 ${
              currentRoute === '/breeds' ? 'bg-secondary' : 'bg-[#FFFFFF1A]'
            }`}
          >
            <span
              className={`text-sm  font-medium tracking-[2px] ${
                currentRoute === '/breeds' ? 'text-white' : 'text-secondary'
              }`}
            >
              BREEDS
            </span>
          </div>
        </Link>
        <Link href="/gallery" className="flex flex-col gap-[10px]">
          <div
            className={`bg-[#FFD280] h-[198px] w-[138px] border-solid border-4 rounded-[20px] flex flex-col items-center justify-center hover:border-white ${
              currentRoute === '/gallery'
                ? 'border-secondary-100'
                : 'border-[#FFFFFF99]'
            }`}
          >
            <Image
              src={hand}
              alt="vote table"
              className="w-[100px] h-[124.468px]"
            />
          </div>
          <div
            className={`h-[36px] w-[138px] rounded-[10px] flex flex-col items-center justify-center hover:bg-secondary-100 ${
              currentRoute === '/gallery' ? 'bg-secondary' : 'bg-[#FFFFFF1A]'
            }`}
          >
            <span
              className={`text-sm  font-medium tracking-[2px] ${
                currentRoute === '/gallery' ? 'text-white' : 'text-secondary'
              }`}
            >
              GALLERY
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
