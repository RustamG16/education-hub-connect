import { createRoot } from "react-dom/client";
import AppLoader from "./components/AppLoader";
import { initSmoothScroll } from "./lib/scroll";
import "./index.css";
import "./mobile.css";

initSmoothScroll();

createRoot(document.getElementById("root")!).render(<AppLoader />);
