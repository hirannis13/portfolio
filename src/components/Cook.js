import { useState } from "react";

export default function Cook() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current=>!current);
    }

    return (
        <main className="interest book">
        <button className="interestBtn" onClick={handleClick}> 👩‍🍳 </button>
        {isShown && (
            <div>
                <h2>Cooking & Baking</h2>
                <p>Cooking and baking come from family for me. I always like to treat people with a nice meal, especially showing them my Hungarian recipes. Each country has something special so it’s always nice to share some from our own culture.</p>
            </div>
        )}

       
        </main>
    )
}