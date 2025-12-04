import { useEffect, useState } from 'react';
import { isMobileDevice } from '../helpers/isMobileDevice';

export function useMobileDevice() {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    setMatches(isMobileDevice());
  }, []);

  return { matches };
}
