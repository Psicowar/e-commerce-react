import WishListProvider from './context/WishListProvider.jsx';
import RouterPath from './Routes/Router';

function App() {
  return (
    <WishListProvider>
      <RouterPath />
    </WishListProvider>

  );
}

export default App;
