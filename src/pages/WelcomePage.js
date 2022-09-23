
export default function HomePage() {
        return  (
        <main className="homePage">
        <aside className="sideBttns">
            <img src="image/github.png" alt="githublogo"/>
            <img src="image/linkedin.png" alt="githublogo"/>
        </aside>
        <section className="introText">
            <h1>Hello!</h1>
            <h2>I'm <span className="myName">Dora Keczko</span></h2>
            <p>I am a Multimedia Design student of Business Academy Aarhus, currently studying Frontend Developer specialization on my 3rd semester.</p>
        </section>
        <img className="pictureMe" src="image/pictureme.webp" alt="pictureofme"/>
        </main>
    )
}
