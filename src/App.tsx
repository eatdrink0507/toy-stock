import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Style/Layout";

import Home from "./Pages/Home";
import { Detail } from "./Pages/Detail";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:num" element={<Detail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
