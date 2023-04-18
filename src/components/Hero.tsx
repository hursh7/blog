import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.jpg';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Picture of the author'
        width={200}
        height={200}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm JunHyung Park"}</h2>
      <h3 className='text-xl font-semibold'>Front Engineer</h3>
      <p>주니어 프론트엔드 개발자 박준형</p>
      <Link href='/contact'>
        <button className='bg-purple-600 text-white font-bold rounded-xl py-2 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
