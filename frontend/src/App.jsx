import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/" element={}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
