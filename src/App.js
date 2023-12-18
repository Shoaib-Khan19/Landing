import './App.css'
import Home from './pages/Home'
import Hero from './components/Hero';
import Bot from './components/Bot';
import About from './components/About';
import Skills from './components/Skills';
import Test from './components/Test';
import TaskC from './components/TaskC';


// import TaskC from './components/TaskC';
function App() {
  return (
    <div className="App">
          <Home /> 
          <Bot />
          <Hero />
          <About />
          <Skills />
          {/* <TaskC /> */}
        {/* <Test/>           */}
    </div>
  );
}

export default App;
