import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <div className="gradient__bg-middle">
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
      </div>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
