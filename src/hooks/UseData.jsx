import { useEffect, useState } from 'react';

function useData() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');



  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
        try {
          setTimeout(async () => {
            const response = await fetch(`http://localhost:3002/data`)
            const data = await response.json();
            setIsLoading(false);
            setProducts(data);
          }, 1000)
        } catch (error) {
          setError(error);
        }
      }
    fetchData();
  }, []);



  return [products, isLoading, error];
}

export default useData;