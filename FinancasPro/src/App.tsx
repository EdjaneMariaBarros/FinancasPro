import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css"; 

export default function App(){
  return(
    <div className="app-container">
        <Header/>
        <div className="content">
            <AppRoutes/>
        </div>
        <Footer/>
    </div>
  )
}