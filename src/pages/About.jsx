import React from 'react';
import { LuUser2 } from "react-icons/lu";
import CommonHeading from '../utills/CommonHeading';

export default function About({ id }) {

    return (
        <div className="about_sec py-90" id={id}>
            <CommonHeading heading="ABOUT" icon={<LuUser2 />} dataAos="fade-up"
            />
            <h1 data-aos="fade-up" className="  main-heading">
                Every great design begin with
                an even   <span className='theme-txt'>better story</span>
            </h1>
            <p data-aos="fade-up" className='grey-txt w-85'>
                Welcome to my personal portfolio website! I'm Sheetal Kapoor,
                a passionate  about my work with a strong background in
                HTML,CSS,SASS,Bootstrap, React Js, and some of graphic tools like Figma ,Photoshop  . With 4+ years of experience with these Skills.
                <br></br>
                Throughout my career, I have worked on various projects that showcase my ability.
                My commitment to excellence and continuous learning drives me to stay updated with the latest
                industry trends and technologies, ensuring that my work is always at the cutting edge.
                <br></br>
                In addition to my technical skills, I am a strong communicator and team player, adept at collaborating
                with cross-functional teams to achieve project goals. I am also a problem-solver, always looking for efficient
                and effective ways to tackle challenges and deliver exceptional results.
                <br></br>
                When I'm not working, I enjoy  exploring new technologies, reading, traveling,
                or engaging in creative activities, which help me maintain a well-rounded and balanced life.
                <br></br>
                Thank you for visiting my portfolio. I invite you to explore my work, learn more about my professional journey,
                and connect with me for potential collaborations or opportunities.
            </p>

        </div >
    );
}
