import BookImage from './BookImage';

const Book = () => {
    return ( 
    <article className="book">
        <BookImage />
        <h2>This is a book</h2>
        <p>This is the Author</p>
    </article> 
    );
}
 
export default Book;