import { ToastContainer } from 'react-toastify';
import { AuthUserProvider } from './context/AuthUserContext/AuthUserContext';
import { FavoritesContextProvider } from './context/FavoritesContext/FavoritesContext';
import { GlobalProductProvider } from './context/ProductGlobalContext/ProductGlobalContext';
import { ShoppingCartProvider } from './context/ShoppingCartContex/ShoppingCartContext';
import RouterPaths from './routes/RouterPaths.routes';


function App() {

  return (
    <AuthUserProvider>
      <GlobalProductProvider>
        <ShoppingCartProvider>
          <FavoritesContextProvider>
            <ToastContainer theme="dark" position="top-center" autoClose={2000} />
            <RouterPaths />
          </FavoritesContextProvider>
        </ShoppingCartProvider>
      </GlobalProductProvider>
    </AuthUserProvider>
  );
}



export default App;
