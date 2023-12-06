import { Route, Routes } from "react-router-dom";
import Navbaruser from "./componentes/navbar/Navbaruser";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Form from "./pages/Login";
import AuthLayuot from "./layouts/AuthLayuot";
import GuesLatout from "./layouts/GuesLatout";
import HouseDetail from "./pages/HouseDetail";
import List from "./pages/List";

const App = () => {
  return (
    <>
      <Navbaruser />
      <Container sx={{ mt: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route element={<AuthLayuot />}>
            <Route path="/list" element={<List />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<GuesLatout />}>
            <Route path="/login" element={<Form />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
