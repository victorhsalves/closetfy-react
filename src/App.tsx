import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes";
import { AppProvider } from "./providers/app-provider";
import './App.css';

function App() {
  return (
    <AppProvider>
      <ToastContainer />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
