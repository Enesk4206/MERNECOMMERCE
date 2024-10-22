import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId"  element={<Product/>}/>
          </Route>
          <Route path="/" element={<Cart/>} />
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}