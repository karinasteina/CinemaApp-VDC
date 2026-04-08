import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MovieGallery from "./components/MovieGallery";
import MovieDetails from "./components/MovieDetails";


function App() {
  
  return (
    <Router>

      <Routes>

        <Route path="/" element={<MovieGallery />}/>
        <Route path="/movie/:id" element={<MovieDetails />} />

      </Routes>

    </Router>
  );
  
}

export default App;
