import { BrowserRouter as Router, Routes } from "react-router-dom";

import routes from "./routes";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>{routes}</Routes>
    </Router>
  );
};

export default App;
