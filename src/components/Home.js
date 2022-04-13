import '../Css/Homepage.css';
import Image from'../Images/img2.jpg';
import ReactRoundedImage from "react-rounded-image";

function Home(){

    return(

<section className="home">

   <div className="max-width">
        { /* <ReactRoundedImage className="images"
            image={Image}
            roundedColor="#321124"
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            hoverColor="#DD1144"
            imagealign="right"
        ></ReactRoundedImage> */}

       <img className='images'  src={Image} width={"200px"} align={"right"}></img>
       <div className="home-content">
           <p className="txt-1">Hello !, My name is</p>
           <p className="txt-2">Pragati Bhanudas Gawade</p>
           <p className="txt-3">And I'm a Software Engineer</p>

       </div>
   </div>


</section>


)}

export default Home;