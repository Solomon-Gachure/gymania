import About from "./components/about";
import Contacts from "./components/contacts";
import Exercises from "./components/exercises";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Plans from "./components/plans";


function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Plans/>
      <About/>
      
      <Contacts/>
      
    </div>
  );
}

export default App;
