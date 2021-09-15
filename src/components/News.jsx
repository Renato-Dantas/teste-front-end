import './News.css'

const News = () => {
    return ( 
        <section className='news-sec'>
            <section className='section1'>
                <div className='news-t1'>NOVIDADES</div>
                <hr className='news-line'/>
                <div className='news-t2 nt2-1'>AUDIO</div>
                <div className='news-t3 nt3-1'>PROFISSIONAL</div>
                <button className='news-btn nbtn1'>CONFIRA</button>
            </section>
            <section className='section2'>
                <div className='news-t1'>NOVIDADES</div>
                <hr className='news-line'/>
                <div className='news-t2 nt2-2'>INSTRUMENTOS</div>
                <div className='news-t3 nt3-2'>MUSICAIS</div>
                <button className='news-btn'>CONFIRA</button>
            </section>
        </section>
     );
}
 
export default News;