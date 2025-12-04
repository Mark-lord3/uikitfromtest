import { useLayoutEffect, useState } from 'react';

export default function useMediaQuery(query, { defaultValue = false, initializeWithValue = true } = {}) {
  const getMatches = (query) => {
    if (typeof window == 'object') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query));
  }

  useLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
}
