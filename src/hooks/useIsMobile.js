import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    document.documentElement.clientWidth < breakpoint
  );

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(document.documentElement.clientWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
