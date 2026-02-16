import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import App from "../App";

const MIN_LOADING_MS = 1400;

export default function AppLoader() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoading(false), MIN_LOADING_MS);
    return () => clearTimeout(t);
  }, []);

  if (showLoading) return <LoadingScreen />;
  return <App />;
}
