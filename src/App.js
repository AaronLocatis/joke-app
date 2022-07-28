
import './App.css';
import SearchPage from "./component/SearchPage";
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
        <Routes>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/*" element={<Navigate to="/search" />}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
