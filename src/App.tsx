import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/SignIn"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Suspense>
  );
};

export default App;
