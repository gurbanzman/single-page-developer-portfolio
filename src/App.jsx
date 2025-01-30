import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/others/loading/index.jsx";

const HomePage = lazy(() => import("./pages/home/index.jsx"));
const CreateUserPage = lazy(() => import("./pages/create-user/index.jsx"));
const AddedProjectPage = lazy(() => import("./pages/added-project/index.jsx"));
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/added-project/:id" element={<AddedProjectPage />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
