import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import messages from "./messages";
import "./styles/App.scss";
import { AuthProvider } from "./context/AuthContext";
import { MemberLogin } from "./components/auth/MemberLogin";
import { MemberApplication } from "./components/auth/MemberApplication";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
