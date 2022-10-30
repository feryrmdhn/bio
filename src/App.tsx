import Footer from "./components/Footer";
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userRoutes } from "./routes/pageRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {userRoutes.map((route: any) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;