import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
