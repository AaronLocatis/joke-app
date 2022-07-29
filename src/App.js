
import './App.css';
import Menu from "./component/Menu";
import SearchPage from "./component/SearchPage";
import EnterPage from "./component/EnterPage";
import FavoritesPage from "./component/FavoritesPage";
import OtherSearchPage from "./component/OtherSearchPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="/other" element={<OtherSearchPage />}></Route>
          <Route path="/enter" element={<EnterPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="*" element={<Navigate to="/enter" />}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
