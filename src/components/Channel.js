import '../static/css/Channel.css'
import { Link } from 'react-router-dom';

const Channel = () => {

    return (
        <article id='channel'>
            <section className='chnnelPage'>
                <section className='channel_section'>

                    <div className='channel_left'>
                        <div id='channelTitle'>프론트와 백엔드를 아우르는 <br/>
                                                기술을 통해<br/>
                                                사용자 경험을 개선하고,<br/>
                                                웹의 품질을 향상시키는 것에 <br/>
                                                열정을 가지고 있습니다</div>
                        <div id='channelMail'>연락처 : notrowing@naver.com , 010 5357 5610 </div>
                        <div id = "channelLink">
                            <Link to={"https://github.com/notrowing"} target='_black'>
                                <button className='channelBtn'>
                                    <img className="channel_icon" src = "https://cdn-icons-png.flaticon.com/256/25/25231.png"/>
                                    <span>Github 바로가기</span> 
                                </button>
                            </Link>

                            <Link to={"https://notrowing.tistory.com/"} target='_black'>
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

                {/* <div className="Channel-scroll-downs">
                    <ScrollLink  to="contact" smooth={true} duration={500}><span></span></ScrollLink >
                </div> */}
            </section>
        </article>
    );
};

export default Channel;