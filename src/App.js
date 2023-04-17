import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "containers/Home";
import Error404 from "containers/Error404";
import GlobalStyle from "globalStyles";

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
