```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('Home component loaded');
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <div>
      Home {isLoaded ? <p>Loaded</p> : <p>Loading...</p>}
    </div>
  );
}

function About() {
  return <div>About</div>;
}

function Dashboard() {
  const location = useLocation();
  const [homeIsLoaded, setHomeIsLoaded] = useState(false);

  useEffect(() => {
    const checkHomeLoaded = setInterval(() => {
      const homeLoaded = document.querySelector('.loaded') !== null;
      if (homeLoaded) {
        clearInterval(checkHomeLoaded);
        setHomeIsLoaded(true);
      }
    }, 100);

    return () => clearInterval(checkHomeLoaded);
  }, []);

  if (!homeIsLoaded) {
    return <div>Waiting for Home component to load...</div>;
  }
  return (
    <div>Dashboard</div>
  );
}

export default App;
```