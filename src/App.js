import { Route, Routes } from "react-router-dom";
import MasterLayout from "./components/layouts/MasterLayout";
import HomePage from "./views/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
