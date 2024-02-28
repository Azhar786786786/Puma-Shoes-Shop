import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
      </div>
      <Footer />
    </div >
  );
}

export default App;
