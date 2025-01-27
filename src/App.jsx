import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, FlexLayout } from '@/components';
import { Home, NotFound, About, User } from '@/pages';
import { UserProvider, AlertProvider } from '@/contexts';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <FlexLayout>
          <AlertProvider>
            <UserProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/:name" element={<User />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </UserProvider>
          </AlertProvider>
        </FlexLayout>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
