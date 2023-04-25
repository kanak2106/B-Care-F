import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Medical from "./pages/medical";
import MacBookPro141 from "./pages/mac-book-pro141";
import FrameComponent from "./pages/frame-component-doctor";
import FrameComponent1 from "./pages/frame-component-user";
import FrameComponent11 from "./pages/frame-component-patient";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Medical />} />
      <Route path="/reconstruction" element={<MacBookPro141 />} />
      <Route path="/doctor" element={<FrameComponent />} />
      <Route path="/user" element={<FrameComponent1 />} />
      <Route path="/patient" element={<FrameComponent11 />} />
    </Routes>
  );
}
export default App;
