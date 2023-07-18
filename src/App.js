import logo from './logo.svg';
import Home from './Pages/Home';
import Partnerpage from './Pages/Partnerpage';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partnerpage />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
