import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import PageNotFound from "../pages/PageNotFound";
import DetailsCharacters from "../pages/Characters/details";
import Comics from "../pages/Comics";
import DetailsComics from "../pages/Comics/details";

const Rotas = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/personagens" element={<Characters />} />
      <Route path="/personagens/:id" element={<DetailsCharacters />} />
      <Route path="/quadrinhos" element={<Comics />} />
      <Route path="/quadrinhos/:id" element={<DetailsComics />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default Rotas;
