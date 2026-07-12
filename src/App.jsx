import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "./layout/LayOut";
import { Toaster } from "react-hot-toast";
import Loading from "./loader/Loading";
// import Loading from "./componants/demo";
// import Loading from "./componants/Homefolder/Loading";

// Lazy loading the components
const Home = lazy(() => import("./pages/Home"));
// const Aboutus = lazy(() => import('./componants/pages/Aboutus'));

function App() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }} className="">
      <>
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="/" element={<Home />} />
              {/* <Route path="/aboutus" element={<Aboutus />} /> */}
            </Route>
          </Routes>
        </Suspense>
        <Toaster />
      </>
    </div>
  );
}

export default App;
