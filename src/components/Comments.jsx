import './Comments.css'
import user from '../assets/user.png'
import arrow from '../assets/arrow.png'

const Comments = () => {
    return ( 
        <section className='comment-sec'>
            <img className="photo-comment" src={user} alt='user'/>
            <div className='id-comment'>
                <h4 className="name-comment">Felipe Salmim</h4>
                <h5 className="prof-comment">Designer</h5>
            </div>
            <img className='arrow' src={arrow} alt="arrow" />
            <div className="box-comment">
                <p className='comment-p'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’</p>
            </div>
        </section>
     );
}
 
export default Comments;