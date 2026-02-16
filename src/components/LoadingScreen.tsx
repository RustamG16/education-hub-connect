import Lottie from "lottie-react";
import loadingAnimation from "@/assets/loading.json";

export function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      role="status"
      aria-label="Loading"
    >
      <div className="h-56 w-56 md:h-80 md:w-80">
        <Lottie animationData={loadingAnimation} loop />
      </div>
    </div>
  );
}
