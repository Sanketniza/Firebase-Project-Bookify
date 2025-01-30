import { useEffect } from "react";
import { useFirebase } from "../context/Firebase";

function ViewOrder() {
    const firebase = useFirebase();

    useEffect(() => {
        if (firebase.isLoggedIn) {
            firebase.fetchMyOrder().then((book) => console.log(book.docs[0].data()));
        }
    }, [firebase]);

    return (
        <>
            <div className="container mt-5"> 
                <h1>View Order</h1>
            </div>
        </>
    );
}

export default ViewOrder;