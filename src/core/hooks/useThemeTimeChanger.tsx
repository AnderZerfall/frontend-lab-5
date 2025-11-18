import { useEffect } from "react";

export function useThemeTimeChanger() {
  useEffect(() => {
    const updateTheme = () => {
      const now = new Date();
      const hour = now.getHours();
      const isNightTime = hour >= 21 || hour < 6;

      if (isNightTime) {
        document.body.classList.add("night-theme");
      } else {
        document.body.classList.remove("night-theme");
      }
    };

    updateTheme();

    const interval = setInterval(updateTheme, 60000); 

    return () => clearInterval(interval);
  }, []);
}