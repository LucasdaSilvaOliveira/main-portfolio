import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Sidebar from './components/layouts/Sidebar';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className={styles.div_container}>
        <Main />
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
