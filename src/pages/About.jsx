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
                Welcome to my personal portfolio website! I'm Sheetal Kapoor, a UI/UX Designer and Frontend Developer with a strong background in HTML, CSS, SCSS, Bootstrap, React.js, and design tools like Figma and Adobe Photoshop. With 6+ years of experience, I focus on creating responsive, user-friendly, and visually engaging digital experiences.
                <br></br>
                Throughout my career, I have worked on a variety of projects including web platforms, dashboards, and business websites, where I contributed to both design and development. I continuously strive to improve my skills and stay updated with the latest design trends and technologies to deliver modern and effective solutions.
                <br></br>
                I enjoy collaborating with teams and working closely with stakeholders to understand requirements and translate ideas into meaningful user experiences. I approach every project with a problem-solving mindset, focusing on usability, performance, and clean design.
                <br></br>
                Beyond my work, I like exploring new tools, learning about emerging technologies, and enhancing my design skills. This helps me stay creative and bring fresh ideas into my projects.
                <br></br>
                Thank you for visiting my portfolio. Feel free to explore my work and connect with me for opportunities or collaborations.
            </p>

        </div >
    );
}
