import { Routes, Route } from "react-router-dom";


import ListComponent from './components/ListComponent'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/jian" element={<ListComponent />} />
      </Routes>
    </div>
  );
}

export default App;
