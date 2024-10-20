import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, FlexLayout } from '@/components';
import { Home, NotFound, About, User } from '@/pages';
import { UserProvider } from '@/contexts';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <FlexLayout>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:name" element={<User />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserProvider>
        </FlexLayout>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
