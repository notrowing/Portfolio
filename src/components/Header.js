import '../static/css/Header.css';

const Header = () => {


    return (
        <article className='Header'>
            
            <section>
                <h5>JEONGA</h5>

                <div className='headMenu'>
                    <button>ABOUT ME</button>
                    <button>SKILL</button>
                    <button>PROJECT</button>
                    <button>CHANNEL</button>
                    <button>CONTACT</button>
                </div>
            </section>

        </article>
    );
};

export default Header;