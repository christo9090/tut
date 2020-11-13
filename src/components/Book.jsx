import BookImage from './BookImage';

const Book = () => {
    const title = "A Promised Land"
    const author = 'Barack Obama'

    return ( 
    <article className="book">
        <BookImage />
        <h2>{title}</h2>
        <p>{author.toUpperCase()}</p>
    </article> 
    );
}
 
export default Book;