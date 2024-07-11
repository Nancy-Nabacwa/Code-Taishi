import Landingpage  from "./Landing";
import Podcast from "./Podcast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




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

        <Route path="/Podcast" element={<Podcast/>}/>
        

        </Routes>
      </Router>
      
      
      
    </div>
  )
}
export default App;
