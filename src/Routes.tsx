import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Publication } from "./pages/Publication";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/publication/:id" element={<Publication />} />
      </Route>
    </Routes>
  );
}
