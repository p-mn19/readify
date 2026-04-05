'use client';
import * as React from 'react';
import TopSection from '@/components/TopSection';
import  sampleBooks from '@/lib/constants';
import BookCard from '@/components/BookCard';

const Page = () => {
  return ( 
    <main className='wrapper container'>
      <TopSection />
      <div className='library-books-grid'>
        {sampleBooks.map((book) => (
          <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} coverColor={book.coverColor} />
        ))}
      </div>
    </main>
   );
}
 
export default Page;