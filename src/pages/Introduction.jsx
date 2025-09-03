import React, { useEffect } from 'react';
import { GoHome } from 'react-icons/go';
import CommonHeading from '../utills/CommonHeading';
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Introduction({ id }) {
    const imageUrl = './assets/images/';

    return (
        <div className="intro_sec py-90" id={id}>
            <CommonHeading heading="INTRODUCE" icon={<GoHome />} dataAos="fade-up"
            />
            <h1 data-aos="fade-up" className="  main-heading">
                Hi from <span className='theme-txt  name-txt text_B'>Sheetal</span>,
                <span className='d-block profile-txt'>Web Designer & <span className='text_M'>UI-UX</span> / Frontend <br />Developer (React.js)</span>
            </h1>
            <p data-aos="fade-up" className='grey-txt w-75'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            <div className="roundLink my-5" data-aos="fade-up" data-aos-duration="3000">
                <Link data-animation="rotate_up" to="" className='go-to-project-btn'><img src={imageUrl + "round-text.png"} alt="" /> <IoIosArrowRoundDown FaFill="#fff" /></Link>
            </div>
            <div className="facts mt-0  d-md-flexgit config --global">
                <div className="left align-items-end gap-3" data-aos="fade-right">
                    <h2 className="left theme-txt mb-0">5+</h2>
                    <p className='grey-txt mb-0'>Years of Experience</p>
                </div>
                {/* <div className="right" data-aos="fade-left" >
                    <h2 className="theme-txt">0+</h2>
                    <p className='grey-txt'>projects completed on <br /></p>
                </div> */}
            </div >
        </div >
    );
}
