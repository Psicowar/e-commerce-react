import { ToastContainer } from 'react-toastify';
import { AuthUserProvider } from './context/AuthUserContext/AuthUserContext';
import { ShoppingCartProvider } from './context/ShoppingCartContex/ShoppingCartContext';
import RouterPaths from './routes/RouterPaths';

function App() {

  return (
    <AuthUserProvider>
      <ShoppingCartProvider>
        <ToastContainer theme="dark" position="top-center" autoClose={2000} />
        <RouterPaths />
      </ShoppingCartProvider>
    </AuthUserProvider>
  );
}



export default App;
