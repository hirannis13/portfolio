
export default function HomePage() {
        return  (
        <main className="homePage">
        <aside className="sideBttns">
            <a href="https://github.com/hirannis13" rel="noreferrer" target="_blank"><img src="image/github.png" alt="githublogo"/></a> 
            <a href="https://www.linkedin.com/in/dóra-keczkó-0b377521b/" rel="noreferrer" target="_blank"><img src="image/linkedin.png" alt="githublogo"/></a> 
        </aside>
        <section className="introText">
            <h1>Hello!</h1>
            <h2>I'm <span className="myName">Dora Keczko</span></h2>
            <p>I am a Multimedia Design student of Business Academy Aarhus, currently studying Frontend Developer specialization on my 3rd semester.</p>
        </section>
        <img className="pictureMe" src="image/picturemee.webp" alt="pictureofme"/>
        </main>
    )
}
