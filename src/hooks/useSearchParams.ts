import { useSearchParams as useSearchParamsRouter } from 'react-router-dom';

export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParamsRouter();

  const updateSearch = (newSearch: Record<string, string>) => {
    setSearchParams(prev => {
      for (const key in newSearch) {
        if (newSearch[key]) {
          prev.set(key, newSearch[key]);
        } else {
          prev.delete(key);
        }
      }

      return prev;
    });
  };

  return { updateSearch, searchParams };
};
