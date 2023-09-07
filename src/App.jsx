import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Books from "./routes/Books";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleBook from "./routes/SingleBook";
import CreateBook from "./routes/CreateBook";
import EditBook from "./routes/EditBook";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/books/:slug" element={<SingleBook/>} />
          <Route path="/createbook" element={<CreateBook/>}/>
          <Route path="/editbook/:slug" element={<EditBook/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
