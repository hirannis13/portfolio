import { useState } from "react";

export default function Book() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current=>!current);
    }

    return (
        <main className="interest book">
        <button className="interestBtn" onClick={handleClick}> 📚 </button>
        {isShown && (
            <div>
            <h2>Book</h2>
            <p>I really enjoy reading, learning about new stories and also creating them by myself. I have one published novel yet, in Hungarian, but I would really like to dig myself deeper into English (maybe later Danish) writing too.</p>
            </div>
        )}

       
        </main>
    )
}