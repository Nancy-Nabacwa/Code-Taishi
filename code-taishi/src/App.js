
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Videos from "./Videos";
import Navbar from "./Navbar";



const App =()=>{
  return(
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={
          <> 
          <Navbar/>         
            {/* <Landingpage/> */}
            <Videos/>

          </>
        } />
        

        </Routes>
      </Router>
      
      
    </div>
  )
}
export default App;
