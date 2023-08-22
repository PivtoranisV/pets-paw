import Image from 'next/image';
import Link from 'next/link';
import petsPaw from '../public/petsPaw.svg';
import logo from '../public/group.svg';
import voteTable from '../public/voteTable.png';
import cat from '../public/cat.png';
import hand from '../public/hand.png';

const Navbar = () => {
  return (
    <header className="flex flex-col pl-[147px] pt-[30px]">
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
        <Link href="/" className="flex flex-col gap-[10px]">
          <div className="bg-[#B4B7FF] h-[198px] w-[138px] border-solid border-4 rounded-[20px] border-[#FFFFFF99] flex flex-col items-center justify-center">
            <Image
              src={voteTable}
              alt="vote table"
              className="w-[100px] h-[124.468px]"
            />
          </div>
          <div className="h-[36px] w-[138px] rounded-[10px] bg-[#FFFFFF1A] flex flex-col items-center justify-center">
            <span className="text-sm text-secondary font-medium tracking-[2px]">
              VOTING
            </span>
          </div>
        </Link>
        <Link href="/" className="flex flex-col gap-[10px]">
          <div className="bg-[#97EAB9] h-[198px] w-[138px] border-solid border-4 rounded-[20px] border-[#FFFFFF99] flex flex-col items-center justify-center">
            <Image
              src={cat}
              alt="vote table"
              className="w-[100px] h-[124.468px]"
            />
          </div>
          <div className="h-[36px] w-[138px] rounded-[10px] bg-[#FFFFFF1A] flex flex-col items-center justify-center">
            <span className="text-sm text-secondary font-medium tracking-[2px]">
              VOTING
            </span>
          </div>
        </Link>
        <Link href="/" className="flex flex-col gap-[10px]">
          <div className="bg-[#FFD280] h-[198px] w-[138px] border-solid border-4 rounded-[20px] border-[#FFFFFF99] flex flex-col items-center justify-center">
            <Image
              src={hand}
              alt="vote table"
              className="w-[100px] h-[124.468px]"
            />
          </div>
          <div className="h-[36px] w-[138px] rounded-[10px] bg-[#FFFFFF1A] flex flex-col items-center justify-center">
            <span className="text-sm text-secondary font-medium tracking-[2px]">
              VOTING
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
