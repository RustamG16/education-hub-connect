import { createRoot } from "react-dom/client";
import AppLoader from "./components/AppLoader";
import { initSmoothScroll } from "./lib/scroll";
import "./index.css";

initSmoothScroll();

createRoot(document.getElementById("root")!).render(<AppLoader />);
