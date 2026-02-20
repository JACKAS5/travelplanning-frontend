// src/hooks/useSearch.ts
import { useState, useMemo, useEffect } from "react";

export function useSearch<T>(
  items: T[],
  query: string,
  keys: (keyof T)[]
) {
  const [loading, setLoading] = useState(false);

  // Debounce query to avoid filtering on every keystroke
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  const filteredItems = useMemo(() => {
    if (!debouncedQuery) return items;

    const lowerQuery = debouncedQuery.toLowerCase();

    return items.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        if (!value) return false;
        return String(value).toLowerCase().includes(lowerQuery);
      })
    );
  }, [items, debouncedQuery, keys]);

  return { filteredItems, loading };
}
