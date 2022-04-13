import '../Css/Portfolioheader.css';

function Header(){
    return(

<header>
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
             <a href="#">Portfolio.</a>
        </div>
        <ul className="menu">
             <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>  
    </nav>
     

</header>
    
)}

export default Header;