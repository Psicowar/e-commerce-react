import { useEffect, useState } from 'react';
import { createContext } from 'react';
export const GlobalProductContext = createContext(null)

export function GlobalProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');




  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/data`)
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);

      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  const value = { products, isLoading, error }

  return (
    <GlobalProductContext.Provider value={value}>
      {children}
    </GlobalProductContext.Provider>
  );
}
