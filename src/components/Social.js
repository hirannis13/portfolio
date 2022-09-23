import { useState } from "react";

export default function Social () {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current=>!current);
    }

    return (
        <main className="interest art">
        <button className="interestBtn" onClick={handleClick}> 👭👭 </button>
        {isShown && (
            <div>
                <h2>Social life</h2>
                <p>Socializing takes an important part in my life. I am more an extroverted person who really enjoy meeting with new people, sharing moments and build relationships. I like to go out either just to eat but also a fan of longer trips, or camping.</p>
            </div>
        )}

       
        </main>
    )
}