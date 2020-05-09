import React, { useEffect, useState } from 'react';

export default function (timeoutInMillis: number) {
  return <P extends {}>(Component: React.ComponentType<P>) => (props: P) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    useEffect(() => {
      setIsHidden(false);
      const timeoutId: number = setTimeout(() => setIsHidden(true), timeoutInMillis);
      return () => clearTimeout(timeoutId);
    }, [props]);

    return isHidden
      ? null
      // eslint-disable-next-line react/jsx-props-no-spreading
      : <Component {...props} />;
  };
}
