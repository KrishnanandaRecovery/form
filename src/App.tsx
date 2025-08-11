import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout/PageLayout';
import Home from './components/Home';
import About from './components/About';
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Service3 from './components/Service3';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services">
            <Route path="serv1" element={<Service1 />} />
            <Route path="serv2" element={<Service2 />} />
            <Route path="serv3" element={<Service3 />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
