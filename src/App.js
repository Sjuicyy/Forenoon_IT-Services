// import logo from "./logo.svg";
import TopbarStart from "./Components/Index/TopbarStart";
import NavBar from "./Components/Index/navbar.js";
import Carousel from "./Components/Index/Carousel";
import Facts from "./Components/Index/facts";
import About from "./Components/Index/About";
import Features from "./Components/Index/Features";
import Services from "./Components/Index/Services";
import Pricing from "./Components/Index/Pricing";
import Quotes from "./Components/Index/Quotes";
import Testimonial from "./Components/Index/Testomonial";
import Team from "./Components/Index/Team";
import Blogs from "./Components/Index/Blogs";
import Vendor from "./Components/Index/Vendor";
import Footer from "./Components/Index/Footer";


import AboutHeader from "./Components/About/AboutHeader";
import BlogHeader from "./Components/Blogs/BlogHeader";
import Blog2 from "./Components/Blogs/Blog2";
import ContactHeader from "./Components/Contacts/ContactHeader";
import Contact from "./Components/Contacts/Contact";
import BlogDetail from "./Components/Detail/Detail";
import FeatureHeader from "./Components/Features/FeatureHeader";
import PriceHeader from "./Components/Price/PriceHeader";
import DetailHeader from "./Components/Detail/DetailHeader";
import QuoteHeader from "./Components/Qutoes/QuoteHeader";
import ServiceHeader from "./Components/Services/ServiceHeader";
import TestimonialHeader from "./Components/Testimonial/TestimonialHeder";
import Weather from "./Components/Index/WeatherAPI";


function App() {



 const dataDetail =[ {
    name:"Sammy",
    age:25,
    class:10,
    location:"Kathmandu",
  }]
  
  
  return (
    <div>
      <TopbarStart  DemoData={dataDetail}  />
      <NavBar />
      <Carousel />
      <Facts />
      <About />
      <Features />
      <Services />
      <Pricing />
      <Quotes />
      <Testimonial />
      <Team />
      <Blogs />
      <Vendor />
      <Footer />
      <Weather /> 
    </div>
  );
}
export default App;
