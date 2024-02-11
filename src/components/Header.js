import { Link } from 'react-scroll';
import '../static/css/Header.css'

const Header = () => {
    return (
        <article className='Header'>
            <section className='HeadSection'>

                <h2>JEONGA</h2>

                <menu className='headMenu'>
                    <div className='MenuItem'>
                        <Link to="aboutme" smooth={true} duration={500} className="menu-item">ABOUT ME</Link>
                    </div>
                    <div className='MenuItem'>
                        <Link to="skill" smooth={true} duration={500} className="menu-item">SKILL</Link>
                    </div>
                    <div className='MenuItem'>
                        <Link to="project" smooth={true} duration={500} className="menu-item">PROJECT</Link>
                    </div>
                    <div className='MenuItem'>
                        <Link to="channel" smooth={true} duration={500} className="menu-item">CHANNEL</Link>
                    </div>
                    <div className='MenuItem'>
                        <Link to="contact" smooth={true} duration={500} className="menu-item">CONTACT</Link>
                    </div>
                </menu>
            </section>
        </article>
    );
};

export default Header;

