import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/main-layout";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Routes within MainLayout */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Handle any other routes */}
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
