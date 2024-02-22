import '../static/css/SlSlslide.css'
import { useState } from 'react';
import SlSlconsulting from './SlSlconsulting';
import SlSlpage1 from './SlSlpage1';
import SlSlpage2 from './SlSlpage2';
import SlSlpage3 from './SlSlpage3';
const  SlSlslide = () => {
    const [currentPage, setCurrentPage]=useState(1);

    const goToNextPage = ()=>{
      setCurrentPage(current=>current===4?1:current+1);
    };
  
    const goToPreviousPage = ()=>{
      setCurrentPage(current=>current===1?4:current-1);
    };
    return (
        <article id="SlSlslide">
            <section className='pageSection'>
                <div className='slideContent'>
                    {currentPage ===1 && <SlSlconsulting/>}
                    {currentPage ===2 && <SlSlpage1/>}
                    {currentPage ===3 && <SlSlpage2/>}
                    {currentPage ===4 && <SlSlpage3/>}
                </div>

                <div className='slideBtn'>
                    <button className='prev' onClick={goToPreviousPage}>&nbsp;이전</button>
                    <button className='next' onClick={goToNextPage}>다음&nbsp;&nbsp;</button>
                </div>

            </section>

        </article>
    );
};

export default SlSlslide;

