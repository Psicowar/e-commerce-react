import { ToastContainer } from 'react-toastify';
import { AuthUserProvider } from './context/AuthUserContext/AuthUserContext';
import { FavoritesContextProvider } from './context/FavoritesContext/FavoritesContext';
import { ShoppingCartProvider } from './context/ShoppingCartContex/ShoppingCartContext';
import RouterPaths from './routes/RouterPaths.routes';


function App() {

  return (
    <AuthUserProvider>
      <ShoppingCartProvider>
        <FavoritesContextProvider>
          <ToastContainer theme="dark" position="top-center" autoClose={2000} />
          <RouterPaths/>
        </FavoritesContextProvider>
      </ShoppingCartProvider>
    </AuthUserProvider>
  );
}



export default App;
