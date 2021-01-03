import React from 'react';
import pic from '../../assets/images/tc.jpg';

function About() {
    return (
        <section>
            <h2 className='heading'>About Me</h2>
            <div className='bio-container'>
                <img className='my-pic' src={pic} alt='Tom Chestnut' />
                <p className='bio'>
                    Hello! I'm Tom.
                    <br />
                    I am an enthusiastic Full Stack Web Developer in the Greater Philadelphia Area.
                    Experienced in front-end and back-end development utilizing methods such as Agile development,
                    RESTful APIs and MVC structure. Skilled in JavaScript, HTML, CSS, Node.js,
                    and Express.js among other tools and frameworks.
                    <br />
                    When I'm not coding, I spend time going for hikes with my wife and our pug,
                    or I may be playing video games like Skyrim, Legend of Zelda, or Assasin's Creed.
                    I also enjoy traveling when I can. I have been to Japan and Italy in the past
                    and hope to visit many more countries in the future.
                </p>
            </div>
        </section>
    );
}

export default About;