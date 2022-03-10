import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

//all pages
import HomeMoviePage from "./pages/HomeMoviePage";
const AddMoviePage = lazy(() => import("./pages/AddMoviePage"));
// import AddNewMoviePage from "./pages/AddMoviePage";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeMoviePage />}></Route>
            <Route path="/new" element={<AddMoviePage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
