import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import Child from './Components/Child';

function App() {
  const name = {
    firstName: "Azhar ",
    MiddleName: "Hussain ",
    LastName: "Khan"
  };
  return (
    <div className="App">
      <Header />
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
      </div> */}
      <Child name={name.firstName} name2={name.MiddleName} name3={name.LastName} />
      <Child name="Azhar Hussain" name2="Qasim Khan" />
      <Footer />
    </div >
  );
}

export default App;
