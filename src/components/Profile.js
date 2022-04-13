import '../Css/Profileheader.css';

import Image from '../Images/img1.jpg';
import ReactRoundedImage from "react-rounded-image";




function Profile(){
    return(
<section className='section-1'>
<nav className="navbar-1">
    <div className="max-width">
        <ul className="menu-1">
           
           <ReactRoundedImage className="images"
                image={Image}
                roundedColor="#321124"
                imageWidth="120"
                imageHeight="120"
                roundedSize="13"
                hoverColor="#DD1144">
            </ReactRoundedImage>

            <h3 className='text-1'>
                Pragati Bhanudas Gawade .
            </h3>

            <p className='mail'>
                pragati.gawade@mindbowser.com
            </p>

            <p className='phone'>
                7887939155
            </p>

            <a href="https://www.linkedin.com/in/pragati-gawade-4225a51b7/"><li> <i className="fa fa-brands fa fa-linkedin"></i></li></a>
            <a href="https://github.com/pragati5355"><li> <i className="fa fa-brands fa fa-github"></i></li></a>
            <a href="https://www.instagram.com/09_pragati_/"><li> <i className="fa fa-brands fa fa-instagram"></i></li></a>
            <a href="https://github.com/pragati5355"><li> <i className="fa fa-brands fa fa-twitter"></i></li></a>
            <a href="https://github.com/pragati5355"><li> <i className="fa fa-brands fa fa-facebook"></i></li></a>


            

        </ul>
    </div>
</nav>   
</section>     
    

)}

export default Profile;