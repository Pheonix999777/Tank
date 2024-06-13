import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { About } from "./Modules/About/About";
import { Blog } from "./Modules/Blog/Blog";
import { Contact } from "./Modules/Contact/Contact";
import { Faq } from "./Modules/Faq/Faq";
import { Home } from "./Modules/Home/Home";
import { Location } from "./Modules/Location/Location";
import { Service } from "./Modules/Service/Service";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Blog />
      <Faq />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}

export default App;
