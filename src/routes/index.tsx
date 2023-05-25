import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import PageNotFound from "../pages/PageNotFound";
import Details from "../pages/Details";

const Rotas = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/personagens" element={<Characters />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default Rotas;
