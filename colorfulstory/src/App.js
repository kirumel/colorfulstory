import './App.css';
import imgA from "./logo/logo.png"
import maintext from "./logo/maintext.png"
import background from "./logo/background.png"
import show from "./logo/show.png"
function App() {
  return (
    <div className="App">
     <div className="navbar">
      <img className="navlogo" src={imgA} alt='logo'/>
      <h1 className='navtext'> SERVICE / ABOUT / ARTIST / SUPPORT / MARKET </h1>
     </div>
     <div>
      <img className="background" src={background} alt='background'/>
          <svg className="stroke" xmlns="http://www.w3.org/2000/svg" width="1920" height="627" viewBox="0 0 1920 627" fill="none">
          <path d="M293.5 4C-78 4 -108.089 463.432 26.0001 568.5C342.5 816.5 743.999 132 1444 66.5C1744.53 38.3793 1992 146 2070 309" stroke="#7304FF" stroke-width="8" stroke-linecap="round"/>
          </svg>
      <img className="show" src={show} alt='show'/>
      <img className="main_text" src={maintext} alt='main_text'/>
        <svg className="star" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
        <path d="M47.2251 0.877216L43.9159 35.8289L77.1228 47.2251L42.1711 43.9159L30.7749 77.1228L34.084 42.1711L0.877194 30.7749L35.8289 34.0841L47.2251 0.877216Z" fill="#837AFF"/>
        </svg>
          <svg className="leftstroke" xmlns="http://www.w3.org/2000/svg" width="4" height="3207" viewBox="0 0 4 3207" fill="none">
          <path d="M1.99986 3207C1.99996 877.547 2 98.3947 2 0" stroke="#7F7B8E" stroke-width="3"/>
          </svg>
     </div>
    </div>
  );
}

export default App;
