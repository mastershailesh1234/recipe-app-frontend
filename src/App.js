import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Foods } from "./data";
import Home from "./pages/Home";
import SoupStarter from "./pages/SoupStarter";
import FullMenu from "./pages/FullMenu";
import EndingFood from "./pages/EndingFood";
import Item from "./pages/Item";
import Recipe from "./pages/recipe/Recipe";
import MainCourse from "./pages/MainCourse";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SoupStarter" element={<SoupStarter />} />
          <Route path="/MainCourse" element={<MainCourse />} />
          <Route path="/FullMenu" element={<FullMenu />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/EndingFood" element={<EndingFood />} />
          <Route path="/Item" element={<Item />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
