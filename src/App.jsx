import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      {/* <Hero /> */}
    </>
  );
};

export default App;
