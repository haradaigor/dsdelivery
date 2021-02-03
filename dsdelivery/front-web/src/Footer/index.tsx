import React from 'react';

import './styles.css';

import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';

function Footer(){
    return(
        <footer className="main-footer">
            <div className="footer icons">
                Application developed during 2th edition of Semana DevSuperior event 

                <div className="footer-icons">
                    <a href="https://www.youtube.com/c/DevSuperior" target = "_new">
                        <YoutubeIcon />
                    </a>
                    <a href="https://www.linkedin.com/school/devsuperior/" target ="_new">
                        <LinkedinIcon/>
                    </a>
                    <a href = "https://www.instagram.com/devsuperior.ig/" target ="_new">
                        <InstagramIcon />
                    </a>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;