import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './views/Layout';
import Home from './views/Home';
import DetectFace from './views/DetectFace';
import Detected from './views/Detected';
import { useStore } from './stores/DBStores';
import { useEffect } from 'react';
import Gesture from './views/Gesture';
import Results from './views/Results';

const App = () => {
  const {init} = useStore();

  useEffect(() => {
    init();
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/face" element={<DetectFace />} />
            <Route path="/detected" element={<Detected />} />
            <Route path="/gesture/:facename" element={<Gesture />} />
            <Route path="/results" element={<Results />} />    
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;