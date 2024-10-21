import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
