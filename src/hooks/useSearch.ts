import { useState, useEffect, useMemo } from "react";

export function useSearch<T>(
  items: T[],
  query: string,
  keys: (keyof T)[],
  debounceMs = 300
) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Defer setLoading asynchronously to avoid synchronous setState
    const startLoading = setTimeout(() => setLoading(true), 0);

    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      setLoading(false); // debounce complete
    }, debounceMs);

    return () => {
      clearTimeout(handler);
      clearTimeout(startLoading);
    };
  }, [query, debounceMs]);

  const filteredItems = useMemo(() => {
    if (!debouncedQuery) return items;

    const lowerQuery = debouncedQuery.toLowerCase();

    return items.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        if (value === null || value === undefined) return false;
        return String(value).toLowerCase().includes(lowerQuery);
      })
    );
  }, [items, debouncedQuery, keys]);

  return { filteredItems, loading };
}