import './App.css';
import WishListProvider from './context/WishListProvider/WishListProvider.jsx';
import RouterPath from './Routes/Router';

function App() {
  return (
    <WishListProvider>
      <RouterPath />
    </WishListProvider>

  );
}

export default App;
