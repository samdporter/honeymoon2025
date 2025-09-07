import React from "react";
import { Navigate } from "react-router-dom";

// This file is no longer used as the main page
// All traffic is redirected to the new MainPage component
// You can delete this file if you want, or keep it as a backup

export default function Home() {
  // Redirect to the new main page
  return <Navigate to="/" replace />;
}