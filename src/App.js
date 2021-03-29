import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import NavBarComponent from './components/Navbar';
import BannerComponent from './components/BannerComponent';
import AboutComponent from './components/AboutComponent'
import GardenLayoutComponent from './components/GardenLayoutComponent'
import AmenitiesComponent from './components/AmenitiesComponent'
import GalleryComponent from './components/GalleryComponent'
import FooterComponent from './components/FooterComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <NavBarComponent/>
      <BannerComponent/>
      <AboutComponent/>
      <GardenLayoutComponent />
      <AmenitiesComponent/>
      <GalleryComponent/>
      <FooterComponent/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is going to be the Sagret Gardens Catalogue site
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
