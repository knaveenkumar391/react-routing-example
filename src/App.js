import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./Components/InitialPage";
import Dashboard from "./Components/Dashboard"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />}/>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Registrationpage/> */}
    </div>
  );
}

export default App;
