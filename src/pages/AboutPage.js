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
                    <h2>Things About Me</h2>
                    <section className="interests">
                        <div>
                            <img src="image/art.webp" alt="artpalette"/>
                            <p>Art is something I can express myself through. I enjoy creating new ideas and watch them come to reality. Usually, I like to have some side art projects, because I can clear out my head while listening to some cool music.</p>
                        </div>
                        <div>
                            <img src="image/book.webp" alt="book"/>
                            <p>I really enjoy reading, learning about new stories and also creating them by myself. I have one published novel yet, in Hungarian, but I would really like to dig myself deeper into English (maybe later Danish) writing too.</p>
                        </div>
                        <div>
                            <img src="image/cook.webp" alt="cookingtools"/>
                            <p>Cooking and baking come from family for me. I always like to treat people with a nice meal, especially showing them my Hungarian recipes. Each country has something special so it’s always nice to share some from our own culture.</p>
                        </div>
                        <div>
                            <img src="image/social.png" alt="threefriends"/>
                            <p>Socializing takes an important part in my life. I am more an extroverted person who really enjoy meeting with new people, sharing moments and build relationships. I like to go out either just to eat but also a fan of longer trips, or camping.</p>
                        </div>
                        <div>
                            <img  src="image/die.webp" alt="die"/>
                            <p>Board games really can bring people together. For me it’s one of the most enjoyable activities to do with friends and colleagues to gather and play while sharing stories and laugh.</p>
                        </div>

                    </section>
                </section>
        </main>
    )
}