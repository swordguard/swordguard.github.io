import { Routes, Route } from "react-router-dom";

import MSForm from './components/MSForm'
import ListComponent from './components/ListComponent'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MSForm />} />
        <Route path="/admin/jian" element={<ListComponent />} />
      </Routes>
    </div>
  );
}

export default App;
