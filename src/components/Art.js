import { useState } from "react";

export default function Art () {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
         setIsShown(current=>!current);
    }
    

    return (
        <main className="interest art">
        <button className="interestBtn" onClick={handleClick}> 🎨 </button>
        {isShown && (
            <div>
            <h2>Art</h2>
            <p>Art is something I can express myself through. I enjoy creating new ideas and watch them come to reality. Usually, I like to have some side art projects, because I can clear out my head while listening to some cool music.</p>
            </div>
        )}
        </main>
    )
}



