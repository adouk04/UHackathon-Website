import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header.jsx"
import "./styles.css"

function App() {

  return (
    <div> 
      <Router>
        <Header />
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> Home Page */}
          </Routes>

      </Router>

    </div>
   
  );
}

export default App
