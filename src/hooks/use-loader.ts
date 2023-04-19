import { useState } from "react";

const useLoader = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const fetchData = async (callback: Function) => {
    setIsLoading(true);
    try {
      await callback();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    fetchData,
  };
};

export default useLoader;
