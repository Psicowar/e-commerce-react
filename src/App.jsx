import { ToastContainer } from 'react-toastify';
import { AuthUserProvider } from './context/AuthUserContext/AuthUserContext';
import { FavouritesContextProvider } from './context/FavouritesContext/FavouritesContext';
import { ShoppingCartProvider } from './context/ShoppingCartContex/ShoppingCartContext';
import RouterPaths from './routes/RouterPaths';

function App() {

  return (
    <AuthUserProvider>
      <ShoppingCartProvider>
        <FavouritesContextProvider>
          <ToastContainer theme="dark" position="top-center" autoClose={2000} />
          <RouterPaths />
        </FavouritesContextProvider>
      </ShoppingCartProvider>
    </AuthUserProvider>
  );
}



export default App;
