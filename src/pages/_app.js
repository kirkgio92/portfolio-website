import "@/styles/globals.css";
import Loader from "@/components/loader";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <Component {...pageProps} />;
}
