import Home from "./Componets/Home";

import Footer from "./Componets/Footer";
import Contact from "./Componets/Contact";
import Skills from "./Componets/Skills";
import Works from "./Componets/Works";
import Services from "./Componets/Services";
import 'react-virtualized/styles.css'; // Import styles

const App = (pr) => {
  const scrollTop = function () {
    const scrollBtn = document.createElement("button"); // Create Element button
    scrollBtn.innerHTML = "&#8657;"; // text button
    scrollBtn.setAttribute("id", "scroll-btn"); // Add Attribute [id]
    document.body.appendChild(scrollBtn); // Add button for  body
    const scrollBtnDisplay = function () {
      if (window.scrollY > window.innerHeight) {
        scrollBtn.classList.add("show"); // Add class "show" show for button
      } else {
        scrollBtn.classList.remove("show"); // Remove Class "show" hidden for button
      }
    };
    window.addEventListener("scroll", scrollBtnDisplay);
    const scrollWindow = function () {
      if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 50);
          scrollWindow();
        }, 10);
      }
    };
    scrollBtn.addEventListener("click", scrollWindow);
  };
  scrollTop();
  return (
    <div className="App">
      <Home />
      <Services />
      <Works />
      <Skills />
      <Contact />
      <Footer />
      <button id="scroll-btn"></button>
    </div>
  );
};

export default App;
