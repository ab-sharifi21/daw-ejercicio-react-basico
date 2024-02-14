import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import Counter from "./components/Counter";
import Color from "./components/Color";
import Buttons from "./components/Buttons";
import Message from "./components/Message";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/color" element={<Color />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
