  import './index.css'
  import { Route, Routes } from 'react-router-dom'
  import Layout from "./Layout";
  import Home from './assets/pages/Home';
  import Category from './assets/pages/Category';
  import Details from './assets/pages/Details';
  import About from './assets/pages/About';
  import Contact from './assets/pages/ContactUs';
  import Event from './assets/pages/Event';
  import Gallery from './assets/pages/Gallery';
  import Review from './assets/pages/review';
  import ScrollToTop from './ScrollToTop';



  export default function App() {

    return (
    
      <>
      <ScrollToTop />
      <Routes>
      
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />   
        
        <Route path="/category" element={<Category />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/review" element={<Review />}/>
        

        </Route>
      </Routes>
      </>
    );
  }


