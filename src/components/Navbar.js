import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import logoMW from '../assets/images/MW-logo_thumbnail.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from "../assets/resume/resume.pdf"
// import { download } from 'fontawesome';

export default function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    
    const downloadResume = () => {

        const resumeURL = resume

        window.open(resumeURL, '');
    }
    
    // This is the hamburger menu that comes in at 960 pixels

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);



    return (       
        <nav className='nav'>
            <div className='nav-container'>
                <Link className='navbar-logo' to="section1">
                    <img src={logoMW} className='MW-logo'/>
                </Link> 
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link exact="true" activeclassName='active' onClick={closeMobileMenu} className='nav-links'to="section1" smooth={true} duration={500} spy={true} offset={-80} >HOME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link exact="true" activeclassName='active' onClick={closeMobileMenu} className='nav-links'to="/about" smooth={true} duration={500} spy={true} offset={-80}>ABOUT</Link>
                    </li>
                    <li className='nav-item'>
                        <Link exact="true" activeclassName='active' onClick={closeMobileMenu} className='nav-links'to="/social" smooth={true} duration={500} spy={true} offset={-80}>PROJECTS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link exact="true" activeclassName='active' onClick={closeMobileMenu} className='nav-links'to="/contact" smooth={true} duration={500} spy={true} offset={-80}>CONTACT</Link>
                    </li>
                </ul> 
                <FontAwesomeIcon icon={faDownload} className='cv' onClick={downloadResume}
/>
            </div>
        </nav>

    )
}


// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.scss';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             TRVL
//             <i class='fab fa-typo3' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/services'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/products'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to='/sign-up'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;