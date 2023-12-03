import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnalyzeDatabasePage from "./pages/AnalyzeDatabasePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "./features/user/userSlice";

const pathsList = [
  { path: "/", component: <HomePage /> },
  { path: "/analyze-database", component: <AnalyzeDatabasePage /> },
];

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoggedIn());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        {pathsList.map((item, index) => (
          <Route path={`${item.path}`} element={item.component} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
