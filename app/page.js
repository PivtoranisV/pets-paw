import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-full z-0">
      <Image
        src="/girl.png"
        alt="girl and pet"
        width={895}
        height={1024}
        className="object-contain"
      />
      <div className="bg-white w-6 h-6" />
    </div>
  );
}
