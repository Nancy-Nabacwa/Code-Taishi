import Landingpage  from "./Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./Resume";




const App =()=>{
  return(
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={
          <>          
            <Landingpage/>
          </>
        } />
        <Route
path="/AboutUs" element={
  <Resume />
}
        />

        </Routes>
      </Router>
      
      
    </div>
  )
}
export default App;
