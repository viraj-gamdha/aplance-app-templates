import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

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
