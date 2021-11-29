import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      {/* <Service></Service> */}
      <Project></Project>
      {/* <Blog></Blog> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
