import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/watchlist" element={<WatchList />} />
      <Route path="/movie/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
