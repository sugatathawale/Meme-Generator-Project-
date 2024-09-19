import './App.css';
import Navbar from "./components/Navbar.js"
import Form from "./components/Form.js"
import Footer from "./components/Footer.js"
// import DownloadButton from './components/DownloadButton.js';
// import HeartButton from './components/LikeBtn.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Footer />
      {/* <header className="App-header">
        <h1>Meme Generator</h1>
        <DownloadButton /> , 
        <HeartButton/>
      </header>  */}
    </div>
  );
}

export default App;
