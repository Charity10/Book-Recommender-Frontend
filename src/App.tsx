import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationsPage from './components/RecommendationsPage';
import BookDetails from './components/details'; 
import { useState } from 'react';

function App() {
 const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecommendationsPage viewMode={viewMode} onViewModeChange={setViewMode} />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
