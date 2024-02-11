import '../static/css/Contact.css'
import { Link } from 'react-router-dom';
const Contact = () => {

    return (
        <article id = "contact">
           <section className='contact_section'>
                <h1>Contact</h1>

                <div>
                    <h2>"어쩌고 문장 배움에 대한 열정을 가지고 <br/>항상 노력하는 문장을 생각해요 <br/> 개발자 조정아가 되겠습니다."</h2>
                    <h3>연락처 : notrowing@naver.com, 010 5357 5610</h3>
                </div>

                <div id = "linkContact">
                    <Link to={"https://github.com/notrowing"} target='_black'>
                        <button className='contactBtn'>
                            <img className="contact_icon" src = "https://cdn-icons-png.flaticon.com/256/25/25231.png"/>
                            <span>GIT 바로가기</span> 
                        </button>
                    </Link>

                    <Link to={"https://github.com/notrowing"} target='_black'>
                        <button className='contactBtn'>
                            <img className="contact_icon" src = "https://t1.daumcdn.net/cfile/tistory/9929C8455FEADCE219"/>
                            <span>TISTORY 바로가기</span>
                        </button>
                    </Link>
                </div>
           </section>
        </article>
    );
};

export default Contact;