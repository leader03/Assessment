import { Suspense } from "react";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import Loader from "./components/common/Loader";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  const selectedRoutes = routes

  return (
    <>
    <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
      <Route element={<DefaultLayout  />}>
      {selectedRoutes.map((route, index) => {
            const { path, component: Component } = route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
          </Route>
      </Routes>
    </>
  );
}

export default App;
