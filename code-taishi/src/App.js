import Landingpage  from "./Landing";
import Podcast from "./Podcast";
import Blogs from "./Blogs";

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
        <Route path="/Blogs" element={<Blogs/>}/>
        

        </Routes>
      </Router>
      
      
      
    </div>
  )
}
export default App;
