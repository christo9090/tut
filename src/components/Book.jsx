import React from 'react';
import BookImage from './BookImage';

const Book = ({imgUrl , title, author}) => {
    const clickHandler = (e) => {
        console.log(e.target)
    }

    return ( 
    <article className="book" onMouseOver={()=>{console.log(title)}}>
        <BookImage imgUrl={imgUrl} />
        <h2>{title}</h2>
        <p>{author.toUpperCase()}</p>
        <button type="button" onClick={clickHandler}>Click Me</button>
    </article> 
    );
}
 
export default Book;