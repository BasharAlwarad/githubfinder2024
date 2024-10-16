import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>COntent</main>
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
