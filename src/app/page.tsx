import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <Dashboard />
  );
}
