import { Link } from "react-router-dom";



const Header = () => {



  return (
    <header style={{backgroundColor: "red"}}>
      <Link to="/menu">
        <button style={{backgroundColor: "black"}}>SHED</button>
      </Link>
      
        <h1 style={{color: "white", fontSize: "100px"}}>MOTOSHED</h1>
        
      
      <Link to="/create">
        <button style={{backgroundColor: "black"}}>ADD MOTO</button>
      </Link>
    </header>
  );
};

export default Header;