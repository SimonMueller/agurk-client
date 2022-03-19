import React, { useEffect, useState } from 'react';

export default function hideAfterTimeout(timeoutInMillis: number) {
  return <P extends object>(Component: React.ComponentType<P>) => function Wrapper(props: P) {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    useEffect(() => {
      setIsHidden(false);
      const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => setIsHidden(true), timeoutInMillis);
      return () => clearTimeout(timeoutId);
    }, [props]);

    return isHidden
      ? null
      // eslint-disable-next-line react/jsx-props-no-spreading
      : <Component {...props} />;
  };
}
