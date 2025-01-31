```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route will cause the error if visited before the Home component loads */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  // Simulate a delay in component loading
  setTimeout(() => {
    console.log('Home component loaded');
  }, 2000);
  return (
    <div>Home</div>
  );
}

function About() {
  return <div>About</div>;
}

function Dashboard() {
  return <div>Dashboard</div>;
}

export default App;
```