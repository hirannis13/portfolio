import Art from "../components/Art";
import Book from "../components/Book";
import Cook from "../components/Cook";
import Social from "../components/Social";
import Game from "../components/Game";

export default function AboutPage() {

    return (
        <main>
            <section className="aboutIntro">
                <h2>Why Denmark?</h2>
                <p>I am Dora Keczko, a Hungarian Multimedia Design Student of Business Academy Aarhus. As a lot of international students, I always get the question how I decided to come to Denmark. Unfortunately, my answer is alike the others and there are not much special things about it, but I like to share it anyway.</p>
                <p>I knew that I want to come in Denmark in 11th grade, since by that time, many of my good friends were in the country studying and working. I visited them many times, even went to their open school events, talked with their teachers and classmates. It was fascinating how kind and social everybody was, even though nobody knew me.</p>
                <p>Fast forward I graduated and got accepted to the Multimedia Design Program. I learned a lot about the culture and the country itself since I am here, but I am eager to learn more. My next step is to learn the language and try to integrate myself into the Danish community more. I hope my portfolio will help you to know more about my skills and competencies but also a bit more about who I am. 😊   </p>
            </section>

            <section className="aboutSkill">
                <h2>Skillset</h2>
                <h3>Technical Skills</h3>
                <div className="skills">
                    <div className="firstS skillbox">
                        <img src="image/code.webp" alt="programming"/>
                        <h4>Programming</h4>
                        <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Frontend Development</li>
                        <li>Web development</li>
                        </ul>
                    </div>

                    <div className="secondS skillbox">
                        <img src="image/ux.webp" alt="uxui"/>
                        <h4>UX/UI</h4>
                        <ul>
                        <li>Prototyping and wireframing</li>
                        <li>Decision mapping</li>
                        <li>Visual Communication</li>
                        <li>Research</li>
                        <li>Information Architecture</li>
                        </ul>
                    </div>

                    <div className="thirdS skillbox">
                        <img src="image/design.webp" alt="design"/>
                        <h4>Design</h4>
                        <ul>
                        <li>Design principles</li>
                        <li>Photography</li>
                        <li>Typography</li>
                        <li>Infographics</li>
                        </ul>
                    </div>

                    <div className="fourthS skillbox">
                        <img src="image/cc.webp" alt="creativecloud"/>
                        <h4>Creative Cloud</h4>
                        <ul>
                        <li>Lightroom</li>
                        <li>Photoshop</li>
                        <li>Premiere</li>
                        <li>Illustrator</li>
                        <li>XD</li>
                        </ul>
                    </div>
                </div>
    
            <h3>Soft Skills</h3>
                <div className="skills">
                    <div className="firstS skillbox">
                        <img src="image/teamwork.webp" alt="teamwork"/>
                        <h4>Teamwork</h4>
                        <ul>
                        <li>Accepting feedback</li>
                        <li>Social skills</li>
                        <li>Interpersonal skills</li>
                        </ul>
                    </div>

                    <div className="secondS skillbox">
                        <img src="image/positive.webp" alt="positiveattitude"/>
                        <h4>Possitive attitude</h4>
                        <ul>
                        <li>Honesty</li>
                        <li>Humor</li>
                        <li>Friendliness</li>
                        </ul>
                    </div>

                    <div className="thirdS skillbox">
                        <img src="image/critical.webp" alt="criticalthinking"/>
                        <h4>Critical thinking</h4>
                        <ul>
                        <li>Creativity</li>
                        <li>Thinking out of the box</li>
                        <li>Adaptability</li>
                        </ul>
                    </div>

                    <div className="fourthS skillbox">
                        <img src="image/communication.webp" alt="communication"/>
                        <h4>Communication</h4>
                        <ul>
                        <li>Negitiation</li>
                        <li>Listening</li>
                        <li>Nonverbal communication</li>
                        </ul>
                    </div>
                </div>
                </section>
                <section className="interestBox">
                    <h2>My interests</h2>
                    <div className="interestBtn">
                        <Art className = "artBtn"/>
                        <Book className = "artBtn"/>
                        <Game className = "artBtn"/>
                        <Social className = "artBtn"/>
                        <Cook className = "artBtn"/>
                    </div>
                </section>
        </main>
    )
}