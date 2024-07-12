import './index.css'
import { useState } from 'react';
// import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import bornAcrimeBlog from '../Assets/bornAcrimeBlog.jpg';


function Blogs(){
    const [showModal,setShowModal]=useState(false)
    
    return(
    <div className="articles-container">
      <Navbar/>
        <div className='modal' style={{display:showModal ? 'block':'none'}}>
            <div className='modal-content'>
          
        <div className='cardsContainer'>

            
        
        <div className="theme-one-text" >
            <h1 className="h1Tag">Identity, Belonging, and Community</h1>
            <p>
            Each character in the book must confront both personal and societal ideas regarding
             their identity and how their community views them. Traditional ideas about a woman’s
              place in South African society and in her family predated apartheid, but apartheid exacerbated 
              these circumstances by enforcing racial segregation. Because their options for residing and 
              working were restricted, all Black people suffered a loss of opportunity that persisted even 
              after apartheid ended. Most men were too poor or uneducated to leave their villages or townships 
              in search of better work. Whether their men provided or not, women bore the brunt of raising a 
              family and running a household on limited money. Racial segregation ensured that everyone lacked 
              perspective on how people other than themselves lived.
             Trevor grows up in a world of strong women whom society views as less than their male counterparts. 
             Even though Patricia has a career and a home of her own, she is still identified as Abel’s wife.
              Abel’s traditional family expects her to defer to him in all things, and while Patricia rejects 
              outward displays of respect, she does support Abel financially even as his business fails.


            </p>
        </div>


      <div className='article-cards'>

        <div className='theme-two'>
            <h1 className="h1Tag">political</h1>
            <p>
            Each character in the book must confront both personal and societal ideas regarding
             their identity and how their community views them. Traditional ideas about a woman’s
              place in South African society and in her family predated apartheid, but apartheid exacerbated 
              these circumstances by enforcing racial segregation. Because their options for residing and 
              working were restricted, all Black people suffered a loss of opportunity that persisted even 
              after apartheid ended. Most men were too poor or uneducated to leave their villages or townships 
              in search of better work. Whether their men provided or not, women bore the brunt of raising a 
              family and running a household on limited money. Racial segregation ensured that everyone lacked 
              perspective on how people other than themselves lived.
             Trevor grows up in a world of strong women whom society views as less than their male counterparts. 
             Even though Patricia has a career and a home of her own, she is still identified as Abel’s wife.
              Abel’s traditional family expects her to defer to him in all things, and while Patricia rejects 
              outward displays of respect, she does support Abel financially even as his business fails.


            </p>

        </div>

        <div className='theme-three'>
        <h1 className="h1Tag">book</h1>
            <p>
            Each character in the book must confront both personal and societal ideas regarding
             their identity and how their community views them. Traditional ideas about a woman’s
              place in South African society and in her family predated apartheid, but apartheid exacerbated 
              these circumstances by enforcing racial segregation. Because their options for residing and 
              working were restricted, all Black people suffered a loss of opportunity that persisted even 
              after apartheid ended. Most men were too poor or uneducated to leave their villages or townships 
              in search of better work. Whether their men provided or not, women bore the brunt of raising a 
              family and running a household on limited money. Racial segregation ensured that everyone lacked 
              perspective on how people other than themselves lived.
             Trevor grows up in a world of strong women whom society views as less than their male counterparts. 
             Even though Patricia has a career and a home of her own, she is still identified as Abel’s wife.
              Abel’s traditional family expects her to defer to him in all things, and while Patricia rejects 
              outward displays of respect, she does support Abel financially even as his business fails.


            </p>

        </div>


        </div>

        

        </div>
        </div>
        </div>


        <div className='BookArticle'>   
          
         
        <div className='blog-div'> 

          <div >
            {/* <img className='book-cover' src="Assets/bornAcrimeBlog.jpg" alt='Born A Crime book Cover'/> */}
            <img className='book-cover' src={bornAcrimeBlog} alt='Born A Crime book Cover'/>
          </div>

          <div className='blog'>

            <h1 className='blog-heading'>Book Review</h1>
           <p className="about-book-text">
            Born a Crime is the story of a mischievous young boy who grows into a restless 
            young man as he struggles to find himself in a world where he was never supposed to exist. 
            It is also the story of that young man’s relationship with his fearless, 
            rebellious, and fervently religious mother—his teammate, 
            a woman determined to save her son from the cycle of poverty, violence, 
            and abuse that would ultimately threaten her own life.
            The stories collected here are by turns hilarious, dramatic, and deeply affecting. 
            Whether subsisting on caterpillars for dinner during hard times,
            being thrown from a moving car during an attempted kidnapping,
            or just trying to survive the lifeand- death pitfalls of dating in high school,
            Trevor illuminates his curious world with an incisive wit and unflinching honesty. 
            His stories weave together to form a moving and searingly funny portrait of a boy making
            his way through a damaged world in a dangerous time, armed only with a keen 
            sense of humor and a mother’s unconventional, unconditional love.
            </p>

            <button className='read-more-btn' onClick={()=> setShowModal(true)}>
            Read More</button>
          </div>
           

           


          </div> 

      </div>
     
            
    </div>
    )
}
export default Blogs;
