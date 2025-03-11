import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import styles from "./App.module.css";
import Protected from "./components/Protected/Protected";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";


function App() {
  const isAuth = true;

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
              element={
                <Protected isAuth={isAuth}>
              <div className={styles.main}>BlogsPage</div>
              </Protected>
              } 
            />
            <Route 
              path="/submit" 
              exact 
              element={
                <Protected isAuth={isAuth}>
              <div className={styles.main}>SubmitBlog </div>
              </Protected>
              } 
            />
            <Route 
              path="/signup" 
              exact 
              element={<div className={styles.main}>SignIn</div>} 
            />
            <Route 
              path="/login" 
              exact 
              element={<div className={styles.main}><Login /></div>} 
            />

            <Route path="*" element={<div className={styles.main}><Error /></div>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
