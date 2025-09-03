import { ProjectBaseUrl } from "./ImgConst";

// skills   
export const skills = [

    {
        id: 1,
        title: "HTML",
        precentage: "99",
        image: "/assets/images/html.png",
        animation: "fade-up",
    },
    {
        id: 1,
        title: "CSS",
        precentage: "99",
        image: "/assets/images/css.png",
        animation: "fade-up",
    },
    {
        id: 1,
        title: "SCSS",
        precentage: "99",
        image: "/assets/images/scss.png",
        animation: "fade-up",
    },
    {
        id: 1,
        title: "Bootstrap",
        precentage: "99",
        image: "/assets/images/bs.png",
        animation: "fade-up",
    },
    {
        id: 1,
        title: "TailWind",
        precentage: "99",
        image: "/assets/images/tw.png",
        animation: "fade-up",
    },
    {
        id: 1,
        title: "Figma",
        precentage: "95",
        image: "/assets/images/figma.svg",
        animation: "fade-right",
    },
    {
        id: 1,
        title: "Photoshop",
        precentage: "95",
        image: "/assets/images/ps.png",
        animation: "fade-up",
    },
    {
        id: 1,
        title: "ReactJs",
        precentage: "80",
        image: "/assets/images/rs.png",
        animation: "fade-left",
    },
    {
        id: 1,
        title: "WordPress",
        precentage: "80",
        image: "/assets/images/wp.png",
        animation: "fade-right",
    },

    {
        id: 1,
        title: "Webflow",
        precentage: "60",
        image: "/assets/images/webflow.svg",
        animation: "fade-down",
    },
]
// interst
export const interest = [
    {
        id: 1,
        title: "Lorem Ipsum",
        icon: "/assets/images/gift.png",
    },
    {
        id: 1,
        title: "Lorem Ipsum",
        icon: "/assets/images/gift.png",
    },
    {
        id: 1,
        title: "Lorem Ipsum",
        icon: "/assets/images/gift.png",
    },
    {
        id: 1,
        title: "Lorem Ipsum",
        icon: "/assets/images/gift.png",
    },
    {
        id: 1,
        title: "Lorem Ipsum",
        icon: "/assets/images/gift.png",
    },
    {
        id: 1,
        title: "Lorem Ipsum",
        icon: "/assets/images/gift.png",
    },
    {
        id: 1,
        title: "Lorem Ipsum",
        icon: "/assets/images/gift.png",
    },
    {
        id: 1,
        title: "Lorem Ipsum",
        icon: "/assets/images/gift.png",
    },
]
//portfolio data 
export const projects = [
    {
        title: 'Websites',
        data: [
            // xeemu  studio 
            {
                id: 2,
                type: "website",
                tags: ["website", "react"],
                projectBanner: `xeemu.png`,
                projectName: "Xeemu Studio",
                projectSubtitle: "Game Art & Development Showcase Website",
                projectLink: "https://xeemu.com",
                description: "A responsive and visually engaging website built to showcase 2D/3D game design, environment art, and creative projects. The platform provides a modern, user-friendly interface to highlight services, projects, and client offerings with seamless navigation.",
                keyFeatures: [
                    <ul>
                        <li>Responsive Next.js frontend with optimized performance and SEO</li>
                        <li>Modern UI crafted with Tailwind CSS</li>
                        <li>Project showcase pages for games ch/aracters and environments</li>
                        <li>Interactive service sections with smooth transitions</li>
                        <li>Fully responsive design for all devices</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Handled the entire frontend design and development independently.</li>
                        <li> Developed custom Next.js components for services, projects, and forms.</li>
                        <li> Implemented responsive layouts with Tailwind CSS, ensuring consistency across devices.</li>
                        <li>  Worked on smooth animations and transitions for a better user experience.</li>
                        <li> Optimized website for performance, accessibility, and SEO.</li>
                        <li> Ensured cross-browser compatibility and responsive breakpoints.</li>
                        <li> Collaborated on content structuring to align with business goals.</li>
                    </ul >
                ],
                tech: [
                    { name: "Next.js" },
                    { name: "React.js" },
                    { name: "Tailwind CSS" },
                    { name: "HTML5" },
                    { name: "CSS3" }, { name: "SCSS" }
                ]
            },
            // xeemu  music
            {
                id: 3,
                type: "website",
                tags: ["website", "react"],
                projectBanner: `xeemu-music.png`,
                projectName: "Xeemu Music",
                projectSubtitle: "A modern and engaging music streaming platform",
                projectLink: "https://music.xeemu.com/",
                description: "Xeemu Music is an online music platform designed to provide users with a seamless way to explore, stream, and enjoy music. The platform focuses on clean UI, responsive layouts, and user-friendly navigation to ensure an engaging experience across devices. My role was to craft the front-end design with attention to aesthetics, usability, and accessibility while aligning with the brand’s vision.",
                keyFeatures: [
                    <ul>
                        <li> Music streaming with easy navigation</li>
                        <li> Fully responsive design for desktop, tablet, and mobile</li>
                        <li> Modern UI with intuitive user experience</li>
                        <li> Search and filter options for discovering songs</li>
                        <li> Playlist-style interface with minimal, clean design</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li> Designed and implemented the front-end layout and structure</li>
                        <li> Created responsive UI using modern CSS frameworks</li>
                        <li> Ensured brand consistency through typography, colors, and spacing</li>
                        <li>Collaborated with developers to integrate design with functionality</li>
                        <li>Optimized user interface for smooth browsing and music playback experience</li>
                    </ul >
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" }, { name: "SCSS" },
                    { name: "Bootstrap 5" },
                    { name: "React UI" },
                ]
            },
            // saras 
            {
                id: 4,
                type: "website",
                tags: ["website", "react"],
                projectBanner: `sarasAI.webp`,
                projectName: 'Saras AI (Web)',
                projectSubtitle: 'AI-powered platform with modern UI/UX and smooth user interactions.',
                projectLink: "https://portfolio-2e974.web.app/",
                description: "Saras AI is a Next.js web application designed from scratch using Figma and implemented with Tailwind CSS. The project emphasizes a clean and futuristic design, responsive layouts, and engaging animations powered by GSAP and Framer Motion. It includes intuitive forms, carousels, and interactive components to deliver a seamless user experience.",
                keyFeatures: [
                    <ul >
                        <li><b>UI/UX Design:</b> Custom Figma design system with reusable components.</li>
                        <li><b>Front-end:</b> Built with Next.js and Tailwind for speed and scalability.</li>
                        <li><b>Responsive Design:</b> Mobile-first and cross-browser compatible.</li>
                        <li><b> Carousels & Sliders:</b> Integrated with Flickity and React Slick.</li>
                        <li><b>Forms & Validation:</b> React Hook Form with custom inputs (phone, date picker, file upload).</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed complete UI/UX in Figma (wireframes, prototypes, style guide).</li>
                        <li> Developed responsive layouts with Next.js and Tailwind CSS.</li>
                        <li>  Implemented animations using GSAP and Framer Motion.</li>
                        <li> Integrated forms, drag-and-drop, carousels, and other interactive components.</li>
                        <li>  Ensured performance optimization and clean reusable code.</li>
                    </ul>
                ],
                techDetails: [
                    { label: "UI/UX Design", value: "Figma" },
                    { label: "Front-end", value: "Next.js, React 18, Tailwind CSS, SCSS" },
                    { label: "Animations", value: "GSAP, Framer Motion, AOS" },
                    { label: "Components", value: "React Slick, Flickity, Headless UI" },
                    { label: "Forms & Validation", value: "React Hook Form, React Phone Input 2, React Datepicker" },
                    { label: "Utilities", value: "tus-js-client, react-dropzone, moment.js" }
                ],

                tech: [{ name: "Figma" }, { name: "SCSS" }, { name: "CSS3" }, { name: "BOOTSTRAP" }, { name: "React.js" }]
            },
            // iqf website
            {
                id: 5,
                tags: ["website"],
                projectBanner: `IQF.webp`,
                projectName: "IndianIQF ",
                projectSubtitle: "Corporate website showcasing IndianIQF’s cold storage, processing solutions, and workflow.e",
                projectLink: "http://112.196.99.99/IndianIQF/",
                description: "IndianIQF is a corporate website designed to highlight the company’s services in cold storage, IQF (Individual Quick Freezing) processes, and food industry solutions. The website provides a clean, professional layout with a dedicated “Our Process” section to visually represent the step-by-step workflow. With a strong focus on user experience, the design communicates reliability, trust, and industry expertise.",
                keyFeatures: [
                    <ul>
                        <li>Modern, responsive website design tailored for the food processing industry.</li>
                        <li> Our Process section with a clear step-by-step visual representation of workflow.</li>
                        <li> Clean typography and professional color palette.</li>
                        <li>Cross-browser and mobile compatibility.</li>
                        <li>Interactive hover effects and smooth scrolling.</li>
                        <li> Easy navigation with well-structured content sections.</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed the UI/UX flow including the “Our Process” section.</li>
                        <li> Built the front-end using responsive design principles.</li>
                        <li> Implemented Bootstrap components and custom styling for consistency.</li>
                        <li>Ensured smooth scrolling and interactive effects for better user engagement.</li>
                    </ul >
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "SCSS" },
                    { name: "Bootstrap5" },
                ]
            },
            // chnage therapy 
            {
                id: 6,
                type: "website",
                tags: ["website", "react"],
                projectBanner: `change-therapy/main.webp`,
                screenList: [
                    { url: `change-therapy/main.png`, title: "Web Login, Signup & Dashboard" },
                    { url: `change-therapy/Homepage_logged in.png`, title: "Main web home page" },
                ],
                projectName: "ChangeTherapy.app",
                projectSubtitle: "Mental Wellness Platform: User, Vendor & Admin Panels",
                projectLink: "https://ctuser.offsure.ai/",
                description: "A therapy management platform featuring three distinct panels—User App, Vendor Panel, and Super Admin Panel. Users can book sessions, vendors (therapists) manage availability and communication, and admins oversee platform-wide operations. Emphasizes intuitive design, responsiveness, and secure API handling.",
                keyFeatures: [
                    <ul>
                        <li><strong>User App:</strong> Responsive web interface for booking and managing therapy sessions.</li>
                        <li><strong>Vendor Panel:</strong> Therapists can manage schedules, chat with clients, and update profiles.</li>
                        <li><strong>Super Admin Panel:</strong> Centralized control for managing users, vendors, and settings with secure routing.</li>
                        <li>Real-time data flow across panels via REST APIs.</li>
                        <li>Consistent UI/UX for seamless platform navigation.</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Led frontend development across all panels using React and Bootstrap.</li>
                        <li>Built reusable components to ensure design consistency.</li>
                        <li>Integrated with REST APIs to enable dynamic, real-time operations.</li>
                        <li>Managed the entire front-end independently from design to deployment.</li>
                    </ul>
                ],
                techDetails: [
                    { label: "UI/UX Design", value: "Figma" },
                    { label: "Front-end", value: "React.js (v18), Bootstrap 5, SCSS" },
                    { label: "Data Handling", value: "REST API (Axios), React Hook Form, Context API" },
                    { label: "Libraries", value: "React Router, React Toastify, Moment.js" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "SCSS" },
                    { name: "Bootstrap 5" },
                    { name: "React.js" }
                ]
            },
            // tabboo 
            {
                id: 8,
                type: "website",
                tags: ["website", "react"],
                projectBanner: "taboo/main.webp",
                screenList: [
                    { url: "taboo/Home.png", title: "Main Home" },
                ],
                projectName: "Taboo Game",
                projectSubtitle: "Web-based Multiplayer Game for Friends & Families",
                projectLink: "https://groopgames.com/",
                description: "A web-based version of the classic Taboo game, designed for friends and families to play together either in person or over video calls like Zoom or Google Meet. Players can create, purchase, and track games seamlessly. The project involved revamping an existing codebase, with a focus on UI enhancement, responsiveness, and maintainability, while preserving the core game logic.",
                keyFeatures: [
                    <ul>
                        <li>User authentication with login/signup.</li>
                        <li>Dashboard to create buy and manage Taboo games.</li>
                        <li>Interactive gameplay screen optimized for both desktop and mobile.</li>
                        <li>Responsive layout suitable for video call play (Zoom Google Meet).</li>
                        <li>Reusable styled components for scalability and maintainability.</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Revamped the entire UI using Styled Components (v6).</li>
                        <li>Replaced old CSS with modern reusable component-based styling.</li>
                        <li>Ensured full responsiveness across devices.</li>
                        <li>Improved layout structure and consistency while keeping game logic intact.</li>
                    </ul>
                ],
                techDetails: [
                    { label: "UI/UX Design", value: "Figma (references)" },
                    { label: "Front-end", value: "React.js (v18), Styled Components v6" },
                    { label: "Data Handling", value: "React Context API, REST APIs (Axios)" },
                    { label: "Libraries", value: "React Router v6, React Toastify" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Styled Components" },
                    { name: "React.js" }
                ]
            },
            {
                id: 9,
                tags: ["website"],
                projectBanner: "templates/main1.webp",
                projectName: "OverNight",
                projectSubtitle: "Bundle of 17 HTML Templates",
                projectLink: "https://overnitewebsites.com/",
                description: "OverNight is a collection of 17 responsive HTML templates designed for different niches like food, cafes, pubs, agencies, and more.",
                techDetails: [
                    { "label": "Core", "value": "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { "name": "HTML5" },
                    { "name": "CSS3" },
                    { "name": "Bootstrap 5" }
                ]
            },

            {
                "id": 10,
                tags: ["website"],
                "projectBanner": "templates/julia.webp",
                "projectName": "Julia.R",
                "projectSubtitle": "Nutrition & Wellness Landing Page",
                projectLink: "https://overnitewebsites.com/01_page.html",
                "description": "Rise with Julia for a healthy, strong body and mind. Relay_1 is a modern nutrition-focused landing page that introduces Julia and her high-tech Nutristation system, designed to provide personalized nutrition advice and guidance for individuals seeking better health and well-being.",
                "keyFeatures": [
                    <ul>
                        <li>Bold hero tagline and brand introduction</li>
                        <li>Personalized nutrition approach showcased</li>
                        <li>Modern, high-tech theme with wellness focus</li>
                        <li>Responsive Bootstrap grid layout</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Developed responsive front-end using HTML/CSS/Bootstrap</li>
                        <li>Integrated provided Figma design into a live web page</li>
                        <li>Ensured mobile-first optimization and cross-browser compatibility</li>
                    </ul>
                ],
                "techDetails": [
                    { "label": "Front-end", "value": "HTML5, CSS3, Bootstrap 5" }
                ],
                "tech": [
                    { "name": "HTML5" },
                    { "name": "CSS3" },
                    { "name": "Bootstrap 5.3.3" }
                ]
            },
            {
                "id": 11,
                tags: ["website"],
                "projectBanner": "templates/foodCO.webp",
                "projectName": "The Food Co.",
                "projectSubtitle": "Fresh Local Ingredients for Modern Palates",
                projectLink: "https://overnitewebsites.com/02_page.html",
                "description": "Modern Fusion Food Refreshed. At The Food Co., we always use local and fresh ingredients to serve to a modern palate. The design features a clear menu showcase and customer testimonial to build trust and showcase authenticity.",
                keyFeatures: [
                    <ul>
                        <li>Bold hero section emphasizing freshness and modern fusion</li>
                        <li>“Our Menus” section categorizing offerings like Appetizers and Entrées</li>
                        <li>Featured customer testimonial to showcase social proof</li>
                        <li>Clean and responsive layout using Bootstrap</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Converted Figma/visual mockup into responsive HTML/CSS/Bootstrap</li>
                        <li>Implemented menu structure and testimonial layout for clarity</li>
                        <li>Ensured mobile responsiveness and visual consistency</li>
                    </ul>
                ],
                "techDetails": [
                    { "label": "Tech Stack", "value": "HTML5, CSS3, Bootstrap 5" }
                ],
                "tech": [
                    { "name": "HTML5" },
                    { "name": "CSS3" },
                    { "name": "Bootstrap 5" }
                ]
            },
            {
                id: 12,
                tags: ["website"],
                projectBanner: "templates/dome.webp",
                projectName: "Dome",
                projectSubtitle: "Multi-Cuisine Restaurant Template",
                projectLink: "https://overnitewebsites.com/03_page.html",
                description: "Dome is a multi-cuisine restaurant template offering a rich and diverse dining experience. It blends global culinary traditions into innovative dishes, highlighted through featured menus, customer ambiance, and a welcoming “Our Story” section.",
                keyFeatures: [
                    <ul>
                        <li>Engaging hero section with location and call-to-action</li>
                        <li>“Our Story” section capturing brand essence elegantly</li>
                        <li>Showcase of featured dishes with pricing</li>
                        <li>Reservation prompt, today's menu, and blog teasers for engagement</li>
                        <li>Warm ambiance section showcasing welcoming environment</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Converted visual design into responsive HTML + Bootstrap 5 structure</li>
                        <li>Arranged sections for brand storytelling and menu highlights</li>
                        <li>Optimized layout for mobile and desktop use</li>
                        <li>Ensured consistent branding through typography, spacing, and imagery</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 13,
                tags: ["website"],
                projectBanner: "templates/APLOMB.webp",
                projectName: "Aplomb",
                projectSubtitle: "Authentic Spanish Restaurant Template",
                projectLink: "https://overnitewebsites.com/04_page.html",
                description: "Aplomb is the passion project of Chef Gonzalo, a seasoned culinary expert with over 20 years of experience. The template highlights authentic Spanish cuisine, reflecting deep-rooted culinary traditions with a modern touch, ideal for showcasing chef-driven restaurants.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with chef’s vision and restaurant ethos</li>
                        <li>Authentic 'Our Story' introduction featuring Chef Gonzalo</li>
                        <li>Dedicated menu section for Spanish specialties</li>
                        <li>Gallery showcase for dishes and restaurant ambiance</li>
                        <li>Reservation and contact sections for customer engagement</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Developed responsive layout with HTML5 and Bootstrap 5</li>
                        <li>Structured sections to emphasize chef’s story and cuisine focus</li>
                        <li>Implemented typography and spacing for premium dining appeal</li>
                        <li>Optimized visuals for performance and device compatibility</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 14,
                tags: ["website"],
                projectBanner: "templates/cafe.webp",
                projectName: "Café",
                projectSubtitle: "Coffee Shop & Café Template",
                projectLink: "https://overnitewebsites.com/05_page.html",
                description: "Café is a modern and cozy coffee shop template designed for cafés, coffee houses, and small eateries. It highlights the welcoming ambiance of a café while showcasing menu items, special offers, and gallery visuals that appeal to coffee lovers.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with coffee theme and tagline</li>
                        <li>About Us section for brand story</li>
                        <li>Dedicated 'What We Offer' and 'Our Menu' sections</li>
                        <li>Image gallery to showcase café ambiance and drinks</li>
                        <li>Contact and location details for easy customer reach</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Developed responsive layout with HTML5 and Bootstrap 5</li>
                        <li>Styled typography and imagery for a cozy coffee vibe</li>
                        <li>Optimized performance for desktop and mobile viewing</li>
                        <li>Structured navigation for clear user experience</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 15,
                tags: ["website"],
                projectBanner: "templates/pub-lounge.webp",
                projectName: "Pub & Lounge",
                projectSubtitle: "Bar & Lounge Template",
                projectLink: "https://overnitewebsites.com/06_page.html",
                description: "Pub & Lounge is a vibrant and modern template designed for pubs, bars, and lounges. It showcases lively decor, signature cocktails, and a fun-filled atmosphere, perfect for businesses that focus on nightlife and social gatherings.",
                keyFeatures: [
                    <ul>
                        <li>Hero banner with bold tagline and ambiance image</li>
                        <li>About Us section highlighting drinks and atmosphere</li>
                        <li>Menu highlights for cocktails and food</li>
                        <li>Gallery section to showcase events and interiors</li>
                        <li>Contact information for reservations and inquiries</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed a nightlife-inspired layout with vibrant aesthetics</li>
                        <li>Built responsive sections for drinks, menu, and gallery</li>
                        <li>Ensured mobile-friendly navigation and quick access to reservations</li>
                        <li>Optimized visuals for an engaging user experience</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 16,
                tags: ["website"],
                projectBanner: "templates/eggs-specialty.webp",
                projectName: "Eggcellent",
                projectSubtitle: "Eggs Specialty Restaurant Template",
                projectLink: "https://overnitewebsites.com/09_page.html",
                description: "Eggcellent is New York's premier eggs specialty restaurant template, inspired by the culinary vision of founder Jack Bloom. It highlights the versatility of eggs in a creative and delicious way, perfect for restaurants focusing on breakfast, brunch, and innovative egg-based dishes.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with strong branding and call-to-action</li>
                        <li>About Us section featuring founder Jack Bloom</li>
                        <li>Dedicated egg-focused menu showcasing variety</li>
                        <li>Specialty dishes like avocado toast and smoked salmon with eggs</li>
                        <li>Contact and reservation options for easy booking</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Created responsive design with a clean, breakfast-inspired look</li>
                        <li>Structured content to emphasize egg-based specialties</li>
                        <li>Optimized user experience for mobile and desktop devices</li>
                        <li>Integrated visually appealing imagery for branding</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 17,
                tags: ["website"],
                projectBanner: "templates/nyc-finedining.webp",
                projectName: "NYUS",
                projectSubtitle: "Modern Fine Dining Restaurant Template",
                projectLink: "https://overnitewebsites.com/08_page.html",
                description: "NYC Dine is a modern fine dining restaurant template designed to showcase the sophistication and lively atmosphere of New York dining. With elegant layouts, chef highlights, and a gallery-driven design, it is ideal for upscale restaurants, bistros, and lounges.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with bold tagline for NYC dining experience</li>
                        <li>About section highlighting restaurant ambiance</li>
                        <li>Dedicated Menu section for signature dishes</li>
                        <li>Visual gallery showcasing food and dining atmosphere</li>
                        <li>Team introduction with chef and staff profiles</li>
                        <li>Customer reviews/testimonials section</li>
                        <li>Reservation and contact details for easy booking</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Developed a clean, responsive layout with Bootstrap 5</li>
                        <li>Organized content to highlight both atmosphere and cuisine</li>
                        <li>Designed gallery and team sections for strong visual storytelling</li>
                        <li>Ensured smooth user experience with performance optimization</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 18,
                tags: ["website"],
                projectBanner: "templates/classic-restaurant.webp",
                projectName: "Deep Light Restaurant",
                projectSubtitle: "Traditional Restaurant About Us Template",
                projectLink: "https://overnitewebsites.com/07_page.html",
                description: "Classic Restaurant is a traditional and elegant restaurant template focused on storytelling. With a refined layout and space for detailed descriptions, it is perfect for restaurants wanting to highlight their heritage, culinary journey, and brand values.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with warm and inviting introduction</li>
                        <li>Detailed About Us text section for restaurant history</li>
                        <li>Elegant typography for a classic dining feel</li>
                        <li>Layout suitable for adding mission, vision, and story</li>
                        <li>Focus on simplicity and readability</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Created a clean and minimal About Us page structure</li>
                        <li>Focused on text presentation and readability</li>
                        <li>Ensured responsive design across all devices</li>
                        <li>Optimized template for restaurants emphasizing heritage</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 19,
                tags: ["website"],
                projectBanner: "templates/skincare-landing.webp",
                projectName: "Lois & Mae Skincare",
                projectSubtitle: "Skincare & Beauty Landing Page",
                projectLink: "https://overnitewebsites.com/10_page.html",
                description: "Lois & Mae Skincare is a clean, elegant landing page tailored for beauty and skincare brands. With soft visuals, founder storytelling, and a focus on product promotion, this template helps brands build trust and attract early customers.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with branding and join waitlist call-to-action</li>
                        <li>Product showcase grid with clean card layout</li>
                        <li>Dedicated founder story section with photo and introduction</li>
                        <li>Soft pastel design with floral elements for a natural feel</li>
                        <li>Email signup and waitlist integration</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed a feminine and soft-toned layout</li>
                        <li>Created product grid section for upcoming launches</li>
                        <li>Integrated waitlist signup for customer acquisition</li>
                        <li>Added founder storytelling for brand personalization</li>
                        <li>Optimized for responsiveness and clean UI</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 20,
                tags: ["website"],
                projectBanner: "templates/abrakadabra-hair.webp",
                projectName: "AbraKadabra Hair & Healing",
                projectSubtitle: "Hair Care & Wellness Landing Page",
                projectLink: "https://overnitewebsites.com/11_page.html",
                description: "AbraKadabra Hair & Healing is a bold and stylish landing page crafted for haircare and holistic wellness brands. With modern visuals, engaging sections, and service highlights, this template helps businesses showcase their expertise and attract clients effortlessly.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with brand tagline and call-to-action</li>
                        <li>Service highlights with supporting visuals</li>
                        <li>Founder/brand introduction section for trust-building</li>
                        <li>Testimonial-ready layout for credibility</li>
                        <li>Clean, modern design with bold accents</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed a bold, wellness-focused layout</li>
                        <li>Highlighted service sections with structured presentation</li>
                        <li>Added founder introduction for personalization</li>
                        <li>Optimized responsiveness across devices</li>
                        <li>Ensured clean UI with modern aesthetic</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 21,
                tags: ["website"],
                projectBanner: "templates/toneitup-landing.webp",
                projectName: "Tone It Up",
                projectSubtitle: "Nutrition & Fitness Landing Page",
                projectLink: "https://overnitewebsites.com/12_page.html",
                description: "Tone It Up Favorites is a vibrant and health-focused landing page designed for nutrition, fitness, and wellness brands. With product showcases, community-driven storytelling, and app promotion, this template is perfect for engaging customers who want to live their healthiest and happiest lives.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with empowering tagline and CTA</li>
                        <li>Product showcase including protein powders, collagen, and supplements</li>
                        <li>Community-focused storytelling to build trust</li>
                        <li>App promotion with access to recipes, workouts, and meditations</li>
                        <li>Clean and modern design highlighting women-focused branding</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed a fitness and wellness-inspired landing page</li>
                        <li>Created product grid showcasing nutrition and supplements</li>
                        <li>Highlighted app features with community-building content</li>
                        <li>Structured clean, feminine UI with wellness focus</li>
                        <li>Ensured full responsiveness across devices</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 22,
                tags: ["website"],
                projectBanner: "templates/flowerhaus-landing.webp",
                projectName: "Flowerhaus",
                projectSubtitle: "Cannabis Subscription Landing Page",
                projectLink: "https://overnitewebsites.com/13_page.html",
                description: "Flowerhaus is a premium subscription landing page designed for cannabis brands. With a focus on elegance and exclusivity, it highlights curated monthly selections of high-quality cannabis products that elevate the customer’s lifestyle and experience.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with brand name and premium tagline</li>
                        <li>Subscription-focused layout to encourage sign-ups</li>
                        <li>Minimal and modern design highlighting exclusivity</li>
                        <li>Focus on lifestyle transformation through curated products</li>
                        <li>Clean visual hierarchy with brand storytelling</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed a sleek, subscription-focused landing page</li>
                        <li>Created premium brand experience with elegant typography</li>
                        <li>Highlighted curated product offering for lifestyle appeal</li>
                        <li>Structured layout to optimize conversions and signups</li>
                        <li>Ensured responsiveness and smooth UI across devices</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 23,
                tags: ["website"],
                projectBanner: "templates/nuzest-landing.webp",
                projectName: "Nuzest",
                projectSubtitle: "Nutrition & Supplements Landing Page",
                projectLink: "https://overnitewebsites.com/14_page.html",
                description: "Nuzest is a clean, professional landing page crafted for nutrition and supplement brands. It emphasizes simplicity, efficacy, and ethical production, making it easy for customers to understand the brand’s philosophy and explore their powerful, nutrient-packed supplements.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with strong brand tagline and product call-to-action</li>
                        <li>Highlight of powerful and nutrient-rich supplements</li>
                        <li>Simple and clean design for easy user navigation</li>
                        <li>Brand philosophy section emphasizing ethical and effective formulations</li>
                        <li>Optimized for both storytelling and product showcasing</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed a minimalist and professional supplement landing page</li>
                        <li>Created brand-focused sections to highlight simplicity and efficacy</li>
                        <li>Emphasized ethical and clean brand message visually</li>
                        <li>Structured product showcase with clear CTAs</li>
                        <li>Ensured responsive and modern UI across all devices</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 24,
                tags: ["website"],
                projectBanner: "templates/grace-rae-skincare.webp",
                projectName: "Grace | Rae Skincare",
                projectSubtitle: "Luxury Skincare & Beauty Landing Page",
                projectLink: "https://overnitewebsites.com/15_page.html",
                description: "Grace | Rae Skincare offers a serene, elegant landing page crafted for premium skincare brands. With a focus on self-care, inner beauty, and radiant skin, the design blends luxury aesthetics with a soothing user experience to promote intentional skincare solutions.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with luxury branding and skincare introduction</li>
                        <li>Product collection showcase for curated skincare solutions</li>
                        <li>Focus on wellness, self-care, and holistic beauty messaging</li>
                        <li>Clean, elegant layout with soft visuals</li>
                        <li>Responsive design optimized for beauty and skincare industry</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed a soft, luxurious landing page for a skincare brand</li>
                        <li>Highlighted self-care and wellness as brand pillars</li>
                        <li>Created product showcase with clear CTAs</li>
                        <li>Emphasized holistic and intentional skincare messaging</li>
                        <li>Ensured mobile-friendly and visually appealing design</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 25,
                tags: ["website"],
                projectBanner: "templates/home-healer-project.webp",
                projectName: "The Home Healer Project",
                projectSubtitle: "Health & Wellness Event Landing Page",
                projectLink: "https://overnitewebsites.com/16_page.html",
                description: "The Home Healer Project landing page highlights upcoming Make & Take events with Dr. Rocha, focusing on natural remedies and hands-on learning. This template is designed to attract health enthusiasts who value educational, interactive experiences in wellness.",
                keyFeatures: [
                    <ul>
                        <li>Hero section announcing live project launch</li>
                        <li>Event highlight featuring Dr. Rocha’s educational session</li>
                        <li>Informative content on natural remedies (ginger, cough syrup)</li>
                        <li>Call-to-action to join in-person workshops</li>
                        <li>Simple and approachable design focused on community wellness</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Created a clean event-focused landing page</li>
                        <li>Highlighted educational wellness workshops</li>
                        <li>Designed for ease of communication and clarity</li>
                        <li>Integrated event CTA for better engagement</li>
                        <li>Optimized for mobile to ensure accessibility</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            },
            {
                id: 26,
                tags: ["website"],
                projectBanner: "templates/sparoom-landing.webp",
                projectName: "sparoom®",
                projectSubtitle: "Aromatherapy & Home Wellness Landing Page",
                projectLink: "https://overnitewebsites.com/17_page.html",
                description: "The sparoom® landing page blends luxury and wellness, showcasing premium aromatherapy diffusers, essential oils, and home wellness products. Designed to inspire relaxation and focus, this template helps brands convey calm and serenity while promoting wellness-based lifestyles.",
                keyFeatures: [
                    <ul>
                        <li>Hero section with brand introduction and calming visuals</li>
                        <li>Product-focused layout for diffusers, essential oils, and wellness items</li>
                        <li>Mission-driven storytelling highlighting spa experience at home</li>
                        <li>Clean, modern design emphasizing serenity and luxury</li>
                        <li>CTA for product discovery and engagement</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed a visually soothing and wellness-inspired template</li>
                        <li>Showcased brand story alongside product offerings</li>
                        <li>Created product-centered layout with focus on lifestyle integration</li>
                        <li>Optimized for accessibility and responsive viewing</li>
                        <li>Emphasized calming color palette and clean typography</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Tech Stack", value: "HTML5, CSS3, Bootstrap 5" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Bootstrap 5" }
                ]
            }
        ]
    },
    {
        title: 'ReactJS',
        data: [
            // leango
            {
                id: 1,
                tags: ["react"],
                type: "dashboard",
                projectBanner: `leango.png`, projectName: 'LeanGoPM',
                projectSubtitle: '(Project Management Platform)',
                projectLink: "https://leangopm.com",
                description: 'LeanGoPM is a comprehensive project management platform designed to streamline collaboration between companies, managers, developers, and clients. The system enables organizations to plan, assign, track, and deliver projects efficiently while ensuring transparency and accountability.',
                keyFeatures: [
                    <ul>
                        <li><b>Secure company onboarding </b> with dedicated workspace creation.</li>
                        <li><b>Role-based access control </b> for Clients, Managers, and Developers.</li>
                        <li><b>Task & Issue Management – </b> Managers can create and assign tasks/issues directly to developers.</li>
                        <li><b>Timesheet Management – </b> Developers can log daily working hours against specific tasks/projects.</li>
                        <li><b>Project Tracking – </b> Clients and managers can monitor progress, deadlines, and resource utilization in real-time.</li>
                        <li><b>Collaboration Tools </b> Built-in discussion threads for task-specific communication between teams and clients.</li>
                        <li><b>Performance Transparency </b> with clear visibility of project deliverables and timelines.</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>
                            Worked as a <b>Web Designer</b> , focusing on creating <b>responsive, user-friendly, and visually consistent UI</b> for the platform.
                        </li>
                        <li> Designed <b>project dashboards, timesheet forms, and task management interfaces</b> to improve usability.</li>
                        <li> Implemented <b>basic functionality and front-end integration </b>for user interactions and project workflows.</li>
                        <li>  Collaborated with developers and managers to align the <b> UI/UX design with project requirements.</b></li>
                    </ul>
                ],
                tech: [{ name: "HTML5" }, { name: "CSS3" }, { name: "SCSS" }, { name: "BOOTSTRAP" }, { name: "React.js" }]

            },
            // stor 
            {
                id: 1,
                tags: ["react"],
                type: "dashboard",
                projectBanner: `storr/stor.png`,
                screenList: [
                    { url: `storr/main.png` },
                    { url: `storr/Users.png` },
                    { url: `storr/Pledge.png` },],
                projectName: 'Stor  Super Admin',
                projectSubtitle: 'A React-based admin dashboard for user and pledge management',
                projectLink: "https://storpartners.com/SuperAdmin/#/",
                description: 'StorPartners Super Admin is a secure, web-based admin dashboard built in React.js with API integrations. It enables administrators to log in securely, manage user data, and oversee pledges in an intuitive, table-driven interface. I designed the UI/UX in Figma and implemented the front-end using React, ensuring a modern, responsive, and seamless experience.',
                keyFeatures: [
                    <ul >
                        <li> Secure Login Authentication with form validation and error handling</li>
                        <li> User Management Dashboard with pagination, search, sorting, and filters</li>
                        <li> Pledge Management with transaction details and amount tracking</li>
                        <li> CSV Export for user and pledge records</li>
                        <li> Reusable Components (pagination, spinners, inputs) for maintainability</li>
                        <li> Fully responsive design with Bootstrap + SCSS styling</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed all screens in Figma (Login, Users, Pledges)</li>
                        <li> Developed front-end using React.js and React Hooks</li>
                        <li> Integrated with REST APIs using Axios</li>
                        <li> Implemented search, sorting, pagination, and CSV export</li>
                        <li>Created custom reusable utilities (Debounce, Spinner, Pagination, CommonInput)</li>
                        <li>  Ensured clean folder structure and scalable codebase</li>
                    </ul>
                ],
                techDetails: [
                    { label: "UI/UX Design", value: "Figma" },
                    { label: "Front-end", value: "React.js, Bootstrap, SCSS" },
                    { label: "Data Handling", value: "REST API (Axios), React Hook Form, Context API" },
                    { label: "Libraries", value: "React-CSV, React Router, React Toastify, Moment.js" }
                ],

                tech: [{ name: "Figma" }, { name: "SCSS" }, { name: "CSS3" }, { name: "BOOTSTRAP" }, { name: "React.js" }]
            },
            // chnage therapy 
            {
                id: 6,
                tags: ["react"],
                type: "dashboard",
                projectBanner: `change-therapy/main.webp`,
                screenList: [
                    { url: `change-therapy/vender.png`, title: "Vender/Super admin login" },
                    { url: `change-therapy/admin.png`, title: "Vender dashboard" },
                    { url: `change-therapy/sa.png`, title: "Super Admin" },
                ],
                projectName: "ChangeTherapy.app",
                projectSubtitle: "Mental Wellness Platform: User, Vendor & Admin Panels",
                otherLink: [
                    { userApp: "https://ctadmin.offsure.ai/", label: 'Vender ' },
                    { userApp: "http://112.196.99.99/changetherapy-sadmin/#/ ", label: 'Super Admin ' },
                ],
                description: "A therapy management platform featuring three distinct panels—User App, Vendor Panel, and Super Admin Panel. Users can book sessions, vendors (therapists) manage availability and communication, and admins oversee platform-wide operations. Emphasizes intuitive design, responsiveness, and secure API handling.",
                keyFeatures: [
                    <ul>
                        <li><strong>User App:</strong> Responsive web interface for booking and managing therapy sessions.</li>
                        <li><strong>Vendor Panel:</strong> Therapists can manage schedules, chat with clients, and update profiles.</li>
                        <li><strong>Super Admin Panel:</strong> Centralized control for managing users, vendors, and settings with secure routing.</li>
                        <li>Real-time data flow across panels via REST APIs.</li>
                        <li>Consistent UI/UX for seamless platform navigation.</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Led frontend development across all panels using React and Bootstrap.</li>
                        <li>Built reusable components to ensure design consistency.</li>
                        <li>Integrated with REST APIs to enable dynamic, real-time operations.</li>
                        <li>Managed the entire front-end independently from design to deployment.</li>
                    </ul>
                ],
                techDetails: [
                    { label: "UI/UX Design", value: "Figma" },
                    { label: "Front-end", value: "React.js (v18), Bootstrap 5, SCSS" },
                    { label: "Data Handling", value: "REST API (Axios), React Hook Form, Context API" },
                    { label: "Libraries", value: "React Router, React Toastify, Moment.js" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "SCSS" },
                    { name: "Bootstrap 5" },
                    { name: "React.js" }
                ]
            },
            // purple box  
            {
                id: 7,
                tags: ["react"],
                type: "dashboard",
                projectBanner: `purple-box/purple-admin.webp`,

                screenList: [
                    { url: `purple-box/purple-admin.webp`, title: "Church Members Management" },
                    { url: `purple-box/purple-sa.webp`, title: "Super Admin Dashboard" },
                    { url: `purple-box/purple-sports.webp`, title: "Sports Admin Dashboard" },
                ],
                projectName: "Purple Box Admin Panels",
                projectSubtitle: "Church Panel | Super Admin | Sports Admin",
                otherLink: [
                    { userApp: "https://churches.purpleboxsportschurch.com/#/", label: "Church Panel" },
                    { userApp: "https://superadmin.purpleboxsportschurch.com/#/", label: "Super Admin" },
                    { userApp: "https://churches.purpleboxsportschurch.com/#/", label: "Sports Admin" }
                ],
                description: "Developed three separate admin panels for Purple Box to manage church and sports data across different roles. The system includes a Church Panel for individual churches to manage members and events, a Super Admin Panel to oversee all churches, and a Sports Admin Panel dedicated to handling coaches, players, colleges, and sports events. Built with React.js and Tailwind CSS, focusing on clean UI, role-based access, and scalable architecture.",
                keyFeatures: [
                    <ul>
                        <li><strong>Church Panel:</strong> Manage church members, events, and internal records with role-based access.</li>
                        <li><strong>Super Admin Panel:</strong> Centralized dashboard to monitor all registered churches and manage system-wide data.</li>
                        <li><strong>Sports Admin Panel:</strong> Specialized features for managing players, coaches, colleges, and sports events.</li>
                        <li>Responsive design with Tailwind CSS ensuring seamless usability on all devices.</li>
                        <li>Real-time data integration and management using REST APIs.</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Developed all three panels independently from scratch using React.js (v18) and Tailwind CSS.</li>
                        <li>Designed and implemented component architecture with reusable modules for scalability.</li>
                        <li>Integrated APIs for real-time data management and role-based operations.</li>
                        <li>Ensured responsive UI/UX and clean, consistent design across platforms.</li>
                    </ul>
                ],
                techDetails: [
                    { label: "Front-end", value: "React.js (v18), Tailwind CSS (v3.4), SCSS" },
                    { label: "Data Handling", value: "REST API (Axios), React Hook Form, Context API" },
                    { label: "Libraries", value: "React Router, React Toastify, React Paginate, React Calendar, Moment.js" },
                    { label: "Build Tools", value: "Vite, ESLint, PostCSS, Autoprefixer" }
                ],
                tech: [
                    { name: "React.js" },
                    { name: "Tailwind CSS" },
                    { name: "SCSS" },
                    { name: "Axios" },
                    { name: "Vite" }
                ]
            },
            // tabboo 
            {
                id: 8,
                tags: ["react"],
                type: "dashboard",
                projectBanner: "taboo/Game.png",
                screenList: [
                    { url: "taboo/Login.png", title: "Login & Signup" },
                    { url: "taboo/gameplay.png", title: "User Dashboard - Manage/Create Games" },
                    { url: "taboo/Game.png", title: "Gameplay Screen" }
                ],
                projectName: "Taboo Game",
                projectSubtitle: "Web-based Multiplayer Game for Friends & Families",

                otherLink: [
                    { userApp: "https://groopgames.com/#/auth/login?redirectTo=/myadmin", label: "Admin" },
                    { userApp: "https://taboogame.offsureit.com/#/home", label: "Taboo Game Demo" }
                ],
                description: "A web-based version of the classic Taboo game, designed for friends and families to play together either in person or over video calls like Zoom or Google Meet. Players can create, purchase, and track games seamlessly. The project involved revamping an existing codebase, with a focus on UI enhancement, responsiveness, and maintainability, while preserving the core game logic.",
                keyFeatures: [
                    <ul>
                        <li>User authentication with login/signup.</li>
                        <li>Dashboard to create buy and manage Taboo games.</li>
                        <li>Interactive gameplay screen optimized for both desktop and mobile.</li>
                        <li>Responsive layout suitable for video call play (Zoom Google Meet).</li>
                        <li>Reusable styled components for scalability and maintainability.</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Revamped the entire UI using Styled Components (v6).</li>
                        <li>Replaced old CSS with modern reusable component-based styling.</li>
                        <li>Ensured full responsiveness across devices.</li>
                        <li>Improved layout structure and consistency while keeping game logic intact.</li>
                    </ul>
                ],
                techDetails: [
                    { label: "UI/UX Design", value: "Figma (references)" },
                    { label: "Front-end", value: "React.js (v18), Styled Components v6" },
                    { label: "Data Handling", value: "React Context API, REST APIs (Axios)" },
                    { label: "Libraries", value: "React Router v6, React Toastify" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Styled Components" },
                    { name: "React.js" }
                ]
            },
            {
                id: 1,
                tags: ["react"],
                type: "dashboard",
                projectBanner: `sunSellPro.png`,
                projectName: 'SunSellPro',
                projectSubtitle: "Solar Pricing & Energy Estimation Platform",
                projectLink: "http://112.196.99.99/sunSellPro/",
                description: 'SunSellPro is a comprehensive solar pricing and energy estimation platform built for both solar professionals and property owners. It allows users to get accurate pricing, calculate potential savings, and generate energy estimates for any property. Admins can manage projects, users, and track performance efficiently.',
                keyFeatures: [
                    <ul>
                        <li><b>Accurate Solar Pricing:</b> Generate precise estimates based on property location and energy usage.</li>
                        <li><b>Property Energy Calculations:</b> Calculates solar potential, savings, and ROI for homeowners.</li>
                        <li><b>Admin Dashboard:</b> Manage users, projects, and solar quotes in a single interface.</li>
                        <li><b>Multi-user Role Management:</b> Distinct access for solar pros, property owners, and admins.</li>
                        <li><b>Real-time Updates:</b> Interactive data-driven charts and tables for monitoring energy projections.</li>
                        <li><b>Responsive Design:</b> Accessible across desktops, tablets, and mobile devices.</li>
                    </ul>
                ],
                myRole: [
                    <ul>
                        <li>Designed and implemented front-end using React.js for responsive dashboards and user-friendly interfaces.</li>
                        <li>Integrated REST APIs to fetch property data, solar estimates, and user information dynamically.</li>
                        <li>Created reusable components for forms, charts, and tables to maintain code consistency.</li>
                        <li>Collaborated with backend developers to ensure smooth data flow and accurate calculations.</li>
                        <li>Optimized UI/UX for easy navigation and accessibility for both solar professionals and property owners.</li>
                    </ul>
                ],
                techDetails: [
                    { label: "UI/UX Design", value: "Figma" },
                    { label: "Front-end", value: "React.js, Bootstrap 5, SCSS" },
                    { label: "Data Handling", value: "REST API (Axios), Context API" },
                    { label: "Libraries", value: "React Router, React ChartJS, React Table" }
                ],
                tech: [
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "SCSS" },
                    { name: "Bootstrap 5" },
                    { name: "React.js" },
                    { name: "Axios" }
                ]
            },
        ]
    },
    {
        title: 'UX',
        data: [{
            id: 8,
            tags: ["UI/UX"],
            projectBanner: "taboo/Game.png",
            screenList: [
                { url: "taboo/Login.png", title: "Login & Signup" },
                { url: "taboo/gameplay.png", title: "User Dashboard - Manage/Create Games" },
                { url: "taboo/Game.png", title: "Gameplay Screen" }
            ],
            projectName: "AnanatPe",
            projectSubtitle: "Web-based Multiplayer Game for Friends & Families",

            otherLink: [
                { userApp: "https://groopgames.com/#/auth/login?redirectTo=/myadmin", label: "Admin" },
                { userApp: "https://taboogame.offsureit.com/#/home", label: "Taboo Game Demo" }
            ],
            description: "A web-based version of the classic Taboo game, designed for friends and families to play together either in person or over video calls like Zoom or Google Meet. Players can create, purchase, and track games seamlessly. The project involved revamping an existing codebase, with a focus on UI enhancement, responsiveness, and maintainability, while preserving the core game logic.",
            keyFeatures: [
                <ul>
                    <li>User authentication with login/signup.</li>
                    <li>Dashboard to create buy and manage Taboo games.</li>
                    <li>Interactive gameplay screen optimized for both desktop and mobile.</li>
                    <li>Responsive layout suitable for video call play (Zoom Google Meet).</li>
                    <li>Reusable styled components for scalability and maintainability.</li>
                </ul>
            ],
            myRole: [
                <ul>
                    <li>Revamped the entire UI using Styled Components (v6).</li>
                    <li>Replaced old CSS with modern reusable component-based styling.</li>
                    <li>Ensured full responsiveness across devices.</li>
                    <li>Improved layout structure and consistency while keeping game logic intact.</li>
                </ul>
            ],
            techDetails: [
                { label: "UI/UX Design", value: "Figma (references)" },
                { label: "Front-end", value: "React.js (v18), Styled Components v6" },
                { label: "Data Handling", value: "React Context API, REST APIs (Axios)" },
                { label: "Libraries", value: "React Router v6, React Toastify" }
            ],
            tech: [
                { name: "HTML5" },
                { name: "CSS3" },
                { name: "Styled Components" },
                { name: "React.js" }
            ]
        },]
    }
];
