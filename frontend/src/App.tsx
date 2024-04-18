import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import VoiceNotes from "./components/VoiceNotes";
import Table from "./components/Table";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Form} />
        <Route path="/voicenotes" Component={VoiceNotes} />
        <Route path="/table" Component={Table} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
