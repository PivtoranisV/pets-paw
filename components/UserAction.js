import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import likeIcon from '../public/like-white.svg';
import dislikeIcon from '../public/dislike-white.svg';
import favIcon from '../public/fav-white.svg';
import likeGreen from '../public/like-green.svg';
import dislikeYellow from '../public/dislike-yellow.svg';
import favRed from '../public/fav-red.svg';

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = `${hours}:${minutes}`;
  return time;
};

const UserAction = ({ catId }) => {
  const [userLogs, setUserLogs] = useState([]);

  const likeHandler = () => {
    const newLog = {
      id: catId,
      time: getCurrentTime(),
      log: `Image ID: ${catId} was added to Likes`,
      icon: likeGreen,
    };
    setUserLogs([...userLogs, newLog]);
  };

  const dislikeHandler = () => {
    const newLog = {
      id: catId,
      time: getCurrentTime(),
      log: `Image ID: ${catId} was added to Dislikes`,
      icon: dislikeYellow,
    };
    setUserLogs([...userLogs, newLog]);
  };
  const favHandler = () => {
    const newLog = {
      id: catId,
      time: getCurrentTime(),
      log: `Image ID: ${catId} was added to Favorites`,
      icon: favRed,
    };
    setUserLogs([...userLogs, newLog]);
  };

  return (
    <div className="flex flex-col mt-[-38px] z-20 relative gap-[14px]">
      <div className="bg-[#282828] flex h-20 gap-1 rounded-[20px] mx-auto">
        <button
          type="button"
          className="bg-[#97EAB9] w-[82px] flex flex-col items-center justify-center rounded-l-[20px]"
          onClick={likeHandler}
        >
          <Image src={likeIcon} alt="like icon" />
        </button>
        <button
          type="button"
          className="bg-[#FF868E] w-[82px] flex flex-col items-center justify-center"
          onClick={favHandler}
        >
          <Image src={favIcon} alt="favorite icon" />
        </button>
        <button
          type="button"
          className="bg-[#FFD280] w-[82px] flex flex-col items-center justify-center rounded-r-[20px]"
          onClick={dislikeHandler}
        >
          <Image src={dislikeIcon} alt="dislike icon" />
        </button>
      </div>
      <div className="flex flex-col gap-[10px]">
        {userLogs.map((log) => (
          <div
            key={log.id}
            className="flex bg-[#FFFFFF0D] h-[60px] items-center rounded-[10px] text-primary text-md pl-[15px] justify-between"
          >
            <div className="bg-[#1D1D1D] px-[10px] py-[3px] rounded-[5px] text-white">
              <p>{log.time}</p>
            </div>
            <div className="flex-grow flex-shrink-0 flex-basis-0 pl-[20px]">
              <p>{log.log}</p>
            </div>
            <div className="flex-shrink-0 flex-basis-0 pr-[21px]">
              <Image src={log.icon} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAction;
