import Footer from "./components/Footer";
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userRoutes } from "./routes/pageRoute";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Flex
          px="30px"
          pt="90px"
          minH="calc(100vh - 115px)"
          flexDirection="column"
        >
          <Routes>
            {userRoutes.map((route: any) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Flex>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;