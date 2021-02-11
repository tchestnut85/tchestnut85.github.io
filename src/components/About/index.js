import React from 'react';
import pic from '../../assets/images/tom.jpg';

function About() {
    return (
        <section>
            <h2 className='heading'>Hello! I'm Tom.</h2>
            <div className='bio-container'>
                <img className='my-pic' src={pic} alt='Tom Chestnut holding his pug in front of a stream.' />
                <p className='bio'>
                    Full Stack Developer specializing in MERN stack development and skilled in creating responsive web applications. Earned a Full Stack Development Certificate from University of Pennsylvania LPS Coding Bootcamp.
                    <br />
                    I have created multiple projects using front-end technology such as JavaScript, React, HTML, and CSS as well as back-end tools like Node.js, Express.js, MongoDB, GraphQL and MySQL while adhering to development methods such as Agile development, RESTful APIs, MVC structure and Single Page Applications (SPAs).
                    <br />
                    When I'm not coding, I spend time going for hikes with my wife and our pug, or I may be playing video games like Skyrim, Legend of Zelda, or Assasin's Creed. I also enjoy traveling when able to, having visited Japan and Italy in the past and hope to see more countries in the future.
                </p>
            </div>
        </section>
    );
}

export default About;