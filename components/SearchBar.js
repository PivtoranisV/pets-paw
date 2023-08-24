import Image from 'next/image';

import likeIcon from '../public/like.svg';
import dislikeIcon from '../public/dislike.svg';
import favoriteIcon from '../public/favorite.svg';
import searchIcon from '../public/search.svg';

const SearchBar = () => {
  return (
    <div className="flex justify-between w-full">
      <form className="flex-grow">
        <div className="flex w-[470px] h-[60px] justify-between ">
          <input
            type="text"
            placeholder="Search for breeds by name"
            className="w-full rounded-l-[20px] px-4 bg-[#FFFFFF0D] text-primary"
          />
          <button
            type="submit"
            className="text-white rounded-r-[20px] px-4 bg-[#FFFFFF0D]"
          >
            <Image src={searchIcon} alt="search icon" />
          </button>
        </div>
      </form>
      <div className="flex">
        <Image src={likeIcon} alt="like icon" />
        <Image src={dislikeIcon} alt="dislike icon" />
        <Image src={favoriteIcon} alt="heart icon" />
      </div>
    </div>
  );
};

export default SearchBar;
