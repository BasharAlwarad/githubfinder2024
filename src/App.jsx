import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, FlexLayout } from '@/components';
import { Home, NotFound, About } from '@/pages';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <FlexLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FlexLayout>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
