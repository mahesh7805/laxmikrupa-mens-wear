import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ConceptSelector } from './concepts/ConceptSelector';
import { Concept1App } from './concepts/Concept1/Concept1App';
import { Concept2App } from './concepts/Concept2/Concept2App';
import { RouterProvider } from './hooks/useRoute';

export function App() {
  // Use Vite base path so routing works on both localhost and GitHub Pages
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* Simple root concept selector */}
        <Route path="/" element={<ConceptSelector />} />

        {/* Concept 1: The original complete catalogue & flagship website */}
        <Route
          path="/concept-1/*"
          element={
            <RouterProvider>
              <Concept1App />
            </RouterProvider>
          }
        />

        {/* Concept 2: The exact visual reference luxury website */}
        <Route path="/concept-2/*" element={<Concept2App />} />

        {/* Legacy collection direct links fallback to Concept 1 */}
        <Route
          path="/collections/*"
          element={
            <RouterProvider>
              <Concept1App />
            </RouterProvider>
          }
        />

        {/* Catch-all fallback redirect to root selector */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
