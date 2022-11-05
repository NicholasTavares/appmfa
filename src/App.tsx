import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
