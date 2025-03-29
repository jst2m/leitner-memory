// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpacedRepetitionPage from "./pages/SpacedRepetitionPage";
import ThemePage from "./pages/ThemePage";
import LevelPage from "./pages/LevelPage";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpacedRepetitionPage />} />
        <Route path="/themes/:themeId" element={<ThemePage />} />
        <Route path="/themes/:themeId/level/:levelId" element={<LevelPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
