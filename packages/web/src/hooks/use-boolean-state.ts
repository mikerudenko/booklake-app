import { useCallback, useState } from 'react';

export const useBooleanState = (
  initial: boolean,
): [boolean, () => void, () => void] => {
  const [value, setValue] = useState(initial);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, setTrue, setFalse];
};
