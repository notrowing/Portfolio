import '../static/css/Channel.css'
import { Link } from 'react-router-dom';
const Channel = () => {

    return (
        <article id='channel'>
            <section className='channel_section'>
            <h1>Channel</h1>
                <Link to={"https://github.com/notrowing"} target='_black'>
                    <button className='ChannelBtn'>
                        <img className="Channel_icon" src = "https://cdn-icons-png.flaticon.com/256/25/25231.png"/>
                        github
                    </button>
                </Link>

                <Link to={"https://github.com/notrowing"} target='_black'>
                    <button className='ChannelBtn'>
                        <img className="Channel_icon" src = "https://t1.daumcdn.net/cfile/tistory/9929C8455FEADCE219"/>
                                tistory
                    </button>
                </Link>
            </section>
        </article>
    );
};

export default Channel;