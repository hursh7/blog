import { Post } from '@/service/posts';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type Props = {
  post: Post;
};

export default function postCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <article className='rounded-md overflow-hidden shadow-lg'>
      <Link href={`/posts/${path}`}>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end'>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm rounded-lg bg-pink-400 text-white px-2 my-2'>
            {category}
          </span>
        </div>
      </Link>
    </article>
  );
}
