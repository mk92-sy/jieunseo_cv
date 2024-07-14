//app.js
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import ResearchExperiencePage from "./pages/ResearchExperiencePage";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
        <Route
          path="/research-experience"
          element={<ResearchExperiencePage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
