import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import styles from "./App.module.css";


function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              exact 
              element={<div className={styles.main}>CoinBounce</div>} 
            />
            <Route 
              path="/" 
              exact 
              element={<div className={styles.main}><Home /></div>} 
            />
            <Route 
              path="/crypto" 
              exact 
              element={<div className={styles.main}>CryptoPage</div>} 
            />
            <Route 
              path="/blogs" 
              exact 
              element={<div className={styles.main}>BlogsPage</div>} 
            />
            <Route 
              path="/submit" 
              exact 
              element={<div className={styles.main}>SubmitBlog </div>} 
            />
            <Route 
              path="/sign-up" 
              exact 
              element={<div className={styles.main}>SignIn</div>} 
            />
            <Route 
              path="/log-in" 
              exact 
              element={<div className={styles.main}>Login</div>} 
            />


          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
