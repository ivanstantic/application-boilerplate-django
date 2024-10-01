import "flowbite";
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";


const Index = React.lazy(() => import("src/pages/Index/Index"));


const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route index element={<Index />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
