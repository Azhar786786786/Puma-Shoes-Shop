import './App.css';
import Header from './Components/Header';
import ShoeCentre from './Components/ShoeCentre';
import Footer from './Components/Footer';


function App() {
  const name = {
    firstName: "Azhar ",
    MiddleName: "Hussain ",
    LastName: "Khan"
  };
  return (
    <div className="App">
      <Header />
      <ShoeCentre />
      <ShoeCentre />
      {/* <Child name={name.firstName} name2={name.MiddleName} name3={name.LastName} />
      <Child name="Azhar Hussain" name2="Qasim Khan" /> */}
      <Footer />
    </div >
  );
}

export default App;
