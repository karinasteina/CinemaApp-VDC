import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MovieGallery from "./components/MovieGallery";
import MovieDetails from "./components/MovieDetails";
import SeatMap from "./components/SeatMap";


function App() {
  
  return (
    <Router>

      <Routes>

        <Route path="/" element={<MovieGallery />}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/session/:id" element={<SeatMap />} />
      </Routes>

    </Router>
  );
  
}

export default App;
