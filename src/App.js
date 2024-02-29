import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import Child from './Components/Child';
import first from './Assets/Images/Army-Trainer-Unisex-Sneakers.avif';
import second from './Assets/Images/Blktop-Rider-Multicolor-Unisex-Sneakers.avif';
import third from './Assets/Images/Exotek-NITRO™-Base-Unisex-Sneakers.avif';

function App() {
  const name = {
    firstName: "Azhar ",
    MiddleName: "Hussain ",
    LastName: "Khan"
  };
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <MainContent heading="Trending Now" title="Army-Trainer-Unisex-Sneakers" price="1000" imgdisp={first} />
        <MainContent heading="Trending Now" title="Blktop-Rider-Multicolor-Unisex-Sneakers" price="2000" imgdisp={second} />
        <MainContent heading="Trending Now" title="Exotek-NITRO™-Base-Unisex-Sneakers" price="3000" imgdisp={third} />
        <MainContent heading="Trending Now" title="Army-Trainer-Unisex-Sneakers" price="1000" imgdisp={first} />
        <MainContent heading="Trending Now" title="Blktop-Rider-Multicolor-Unisex-Sneakers" price="2000" imgdisp={second} />
        <MainContent heading="Trending Now" title="Exotek-NITRO™-Base-Unisex-Sneakers" price="3000" imgdisp={third} />
      </div>
      {/* <Child name={name.firstName} name2={name.MiddleName} name3={name.LastName} />
      <Child name="Azhar Hussain" name2="Qasim Khan" /> */}
      <Footer />
    </div >
  );
}

export default App;
