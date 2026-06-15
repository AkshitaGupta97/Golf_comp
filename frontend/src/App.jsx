import { useEffect, useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return <>{loading ? <WelcomeScreen /> : <Home />}</>;
}

export default App
