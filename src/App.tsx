import { Route, Routes } from "react-router-dom";
import { Error } from "./components/error";
import { Layout } from "./layout";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:category/:option" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
