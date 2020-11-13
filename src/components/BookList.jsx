import React from 'react';
import Book from './Book';
import bookData from './../data/data';

const BookList = () => {
    return ( 
        <section className="booklist">
            {bookData.map( book => { 
                return <Book
                    key={book.id}
                    {...book}
                /> } )
            }
        </section>
    );
}

export default BookList;