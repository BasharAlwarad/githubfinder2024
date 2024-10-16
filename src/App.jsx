import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/components';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        {/* <Routes> */}
        <main className="container px-3 pb-12 mx-auto">Content</main>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* </Routes> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
