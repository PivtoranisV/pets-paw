import Image from 'next/image';
import Link from 'next/link';

import searchIcon from '../public/search.svg';
import { links } from '@/constants';

const SearchBar = () => {
  return (
    <div className="flex w-full gap-[10px] items-center">
      <form>
        <div className="flex w-[470px] h-[60px] justify-between ">
          <input
            type="text"
            placeholder="Search for breeds by name"
            className="w-full rounded-l-[20px] pl-5 py-4 bg-background text-primary text-base outline-none"
          />
          <button type="submit" className="rounded-r-[20px] px-4 bg-background">
            <div className="bg-[#FF868E33] p-[10px] rounded-[10px]">
              <Image src={searchIcon} alt="search icon" />
            </div>
          </button>
        </div>
      </form>
      <div className="flex gap-[10px]">
        {links.map((link) => (
          <Link key={link.description} href={'/' + link.id}>
            <div className="w-[60px] h-[60px] bg-background rounded-[20px] flex items-center justify-center">
              <Image src={link.image} alt={link.description} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
