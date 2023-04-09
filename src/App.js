// import logo from "./logo.svg";
import "./App.css";
import TopbarStart from "./Components/TopbarStart";
import NavBar from "./Components/navbar.js";
import Carousel from './Components/Carousel';
import Demo from "./Components/demo";
import Demo2 from "./Components/demo2";
import Facts from "./Components/facts"

function App() {
  return (
    <div>
      <TopbarStart />
      <NavBar />
      <Carousel />
      <Facts/>


      {/* <Demo /> */}
      {/* <Demo2 /> */}
    </div>
  );
}
export default App;