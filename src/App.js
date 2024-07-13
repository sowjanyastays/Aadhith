import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import VideoPage from './VideoPage/VideoPage';
import MainOutPage from './MainOutPage/MainOutPage';
import CarouselPage from './CarPage/CarPage';
import DoorComponent from './SecondVideo/SecondVideo';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/video' element={<VideoPage />} />
      <Route path='/main-vid' element={<MainOutPage />} />
      <Route path='/photos' element={<CarouselPage />} />
      <Route path='sur-video' element={<DoorComponent />} />
    </Routes>
    </div>
  );
}

export default App;
