import banner from "./assets/main-banner.jpg";
import Footer from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header 
      banner={banner} 
      isMainPage={true}
      />
        <Outlet />
      <Footer/>
    </>
  )
}

export default App
