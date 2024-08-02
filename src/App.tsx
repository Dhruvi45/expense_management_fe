import { ToastContainer } from 'react-toastify';
import Header from './components/header/Header';
import AppRoutes from './routes/AppRoutes';
function App() { 

  return (
    <>
    <ToastContainer />
    <Header/>
    <AppRoutes/>
    </>
  );
};

export default App;
