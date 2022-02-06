import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import history from "./history";
import Details from "./pages/Details";
import Drag from "./pages/Drag";

function App() {
  return (
    <Routes history={history}>
      <Route index path="/" element={<Home />} />
      <Route index path="/watchlist" element={<WatchList />} />
      <Route path="/movie/:id" element={<Details />} />
      <Route path="drag" element={<Drag />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
