import { useEffect, useState } from 'react';

function useData(params) {
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


  useEffect(() => {
    const fetchData = async () => {
        try {
          setTimeout(async () => {
            const response = await fetch(`http://localhost:3002/data/?q=${params}`)
            const data = await response.json();
            setProducts(data);
          }, 1000)
        } catch (error) {
          setError(error);
        }
      }

    params.length > 3 && fetchData();
    params.length === 0 && fetchData();
  }, [params]);


  return [products, isLoading, error];
}

export default useData;