import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='text-center p-4'>
      <h2 className='text-lg font-bold border-b border-purple-500 mb-2 pb-2'>
        Category
      </h2>
      <ul>
        {categories.map(category => (
          <li
            className={`cursor-pointer hover:text-purple-500 ${
              category === selected && 'text-purple-600'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
