import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import AssetDetails from "../pages/AssetDetails/AssetDetails";
import Alerts from "../pages/Alerts/Alerts";
import Dividends from "../pages/Dividends/Dividends";
import Recommendations from "../pages/Recommendations/Recommendations";
import Signup from "../pages/Signup/Signup";
import Portifolio from "../pages/Portifolio/Portifolio";
import Results from "../pages/Results/Results";
export default function AppRoutes(){
    return(

        <Routes>
            
            <Route path="/" element={<Home/>}/> 
            <Route path="/login" element={<Login/>}/> 
            <Route path="/dashboard" element={<Dashboard/>}/> 
            <Route path="/asset/:id" element={<AssetDetails/>}/> 
            <Route path="/alerts" element={<Alerts/>}/> 
            <Route path="/dividends" element={<Dividends/>}/> 
            <Route path="/recommendations" element={<Recommendations/>}/> 
            <Route path="/about" element={<About/>}/> 
             <Route path="/signup" element={<Signup />} />
             <Route path="/portifolio" element={<Portifolio/>}/>
             <Route path="/results" element={<Results />} />
        </Routes>
    )
}