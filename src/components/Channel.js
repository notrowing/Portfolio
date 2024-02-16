import '../static/css/Channel.css'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Channel = () => {

    return (
        <article id='channel'>
            <section className='chnnelPage'>
                <section className='channel_section'>

                    <div className='channel_left'>
                        <div>
                            <h2>"(임시문장)시간이 '나서'가 아니라 <br/>시간을 '내서' <br/>노력 해야 한다. <br/> 열정은 내일에 몰입하는 것이고 <br/> 열광은 남의일에 집중하는 것이다"</h2>
                            <h3>연락처 : notrowing@naver.com , 010 5357 5610 </h3>
                        </div>

                        <div id = "channelLink">
                            <Link to={"https://github.com/notrowing"} target='_black'>
                                <button className='channelBtn'>
                                    <img className="channel_icon" src = "https://cdn-icons-png.flaticon.com/256/25/25231.png"/>
                                    <span>GIT 바로가기</span> 
                                </button>
                            </Link>

                            <Link to={"https://github.com/notrowing"} target='_black'>
                                <button className='channelBtn'>
                                    <img className="channel_icon" src = "https://t1.daumcdn.net/cfile/tistory/9929C8455FEADCE219"/>
                                    <span>Tistory 바로가기</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='channel_right'>
                        <h1>Channel</h1>
                        <div className='channelProfile'>
                            <img src="images/profile2.jpg" className='channelImg'/>
                        </div>
                    </div>
                </section>

                <div className="Channel-scroll-downs">
                    <ScrollLink  to="contact" smooth={true} duration={500}><span></span></ScrollLink >
                </div>
            </section>
        </article>
    );
};

export default Channel;