import React from 'react';
import { MdOutlineFileCopy } from "react-icons/md";

import CommonHeading from '../utills/CommonHeading';
import { Link } from 'react-router-dom';

export default function Resume({ id }) {
    const docUrl = './assets/docs/';

    return (
        <div className="resume_sec py-90" id={id}>
            <CommonHeading heading="RESUME" icon={<MdOutlineFileCopy />
            } dataAos="fade-up"
            />
            <h1 data-aos="fade-up" className="main-heading">
            Education &             <span className='theme-txt'> Experience</span>
            </h1>
            <div class="resume-timeline">                 
            <div class="item scroll-animation pb-5 heading" data-aos="fade-down-left">
                <h1   className='theme-txt fs-1 '> Education            </h1>
            </div>
            
            <div class="item scroll-animation" data-aos="fade-left">
                    <span class="data-time grey-txt  mb-3">2022-Pursuing</span>
                    <h3>MBA in HR & Information Technology</h3>                    
                    <p className='grey-txt fs-2 mb-0'>Lovely Professional University</p> 
                </div> 
            <div class="item scroll-animation" data-aos="fade-left">
                    <span class="data-time grey-txt  mb-3">(2019 - 2022)-70%</span>
                    <h3>Graduation</h3>                    
                    <p className='grey-txt fs-2 mb-0'>Kurukshetra University                </p> 
                </div> 
                
            <div class="item scroll-animation" data-aos="fade-left">
                    <span class="data-time grey-txt  mb-3"> (2015-2018) - 60%</span>
                    <h3>Diploma in Computer Science </h3>                    
                    <p className='grey-txt fs-2 mb-0'>Govt. Polytechnic, Ambala</p> 
                </div> 
            <div class="item scroll-animation" data-aos="fade-left">
                    <span class="data-time grey-txt  mb-3"> (2018-2019) - 60%                    </span>
                    <h3>12th </h3>                    
                    <p className='grey-txt fs-2 mb-0'>Haryana Board of School Education (HBSE)
                    </p> 
                </div> 
            <div class="item scroll-animation" data-aos="fade-left">
                    <span class="data-time grey-txt  mb-3">  (2014-2015) - 77%</span>
                    <h3>10th</h3>                    
                    <p className='grey-txt fs-2 mb-0'>Arya Sen Secondary School, Naraingarh                    </p> 
                </div> 
                <div class="item scroll-animation pb-5 heading mt-5" data-aos="fade-down-left">
                <h1   className='theme-txt fs-1 '> Experience            </h1>
            </div>  
            
                <div class="item scroll-animation " data-aos="fade-down-left">
                    <span class="data-time grey-txt  mb-3">March 2022 - Present</span>
                    <h3>Web designer & ReactJs</h3> 
                    <p className='grey-txt fs-2 mb-0'>OffsureIT Solutions</p>
                    <p className='grey-txt fs-4 fst-italic'>Sahibzada Ajit Singh Nagar, Punjab </p>
 
                </div>
                <div class="item scroll-animation" data-aos="fade-left">
                    <span class="data-time grey-txt  mb-3">Sep 2019 - Feb 2022</span>
                    <h3>UI/UX & Web Designer</h3>
                    <p className='grey-txt fs-2 mb-0'>KindleBit Solutions Pvt. Ltd.</p>
                    <p className='grey-txt fs-4 fst-italic'>Sahibzada Ajit Singh Nagar, Punjab </p> 

                    


                </div>
                                 
            
            </div>
            <div className="down-btn mt-5">
                <a href={docUrl + "SK_resume.pdf"} download className="theme-btn btn">
                    Download Resume</a>
            </div>
        </div >
    );
}
