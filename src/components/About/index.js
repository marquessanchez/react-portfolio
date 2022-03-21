import React from 'react';
import coverImage from '../../assets/cover/joey.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">A Bit About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        At this moment I can a sales professional at Malouf Cadillac. My experiences with sales has been very exciting as I am faced with different people and their needs. As you see above, I closed a deal with the hip-hop artist Joey Bada$$. I find myself always being curious to figure things out and how things operate. I have developed that trait by playing sports and working on fundamentals to ensure I am a master at the basics before moving onto more difficult practices. From growing up being an athlete, I am able to utilize my skills to collaborate with a team to accomplish a goal. These attributes all molded me to become someone who is willing to work independently as well as collectively with a group made me want to find a career where I can use these stregnths and have fun while doing it. That's when I came to a decision I will lvoe to continue practcing coding. Now, as a future junior developer, I am commtted to learning a good foundation to front end and back end development and ultimately be apart of a successful company.
        </p>
      </div>
    </section>
  );
}

export default About;
