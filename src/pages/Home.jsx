import { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Cards from './Card';

function Home() {
    const firebase = useFirebase();
    const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  })

    return (
        <>
            <div className="container">
                <h1>Your Books Card</h1>
                {
                    books.length > 0 ? (
                        books.map((book) => (
                            <Cards key={book.id} id={book.id} {...book.data()} /> // Pass the book data as a prop to the Cards component
                        ))
                    ) : (
                        <p>No books available</p>
                    )
                }
            </div>
        </>
    );
}

export default Home;
