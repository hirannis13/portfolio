import { useState } from "react";

export default function Game() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current=>!current);
    }

    return (
        <main className="interest book">
        <button className="interestBtn" onClick={handleClick}> 🎲 </button>
        {isShown && (
            <div>
                <h2>Board Games</h2>
                <p>Board games really can bring people together. For me it’s one of the most enjoyable activities to do with friends and colleagues to gather and play while sharing stories and laugh.</p>
            </div>
        )}

       
        </main>
    )
}