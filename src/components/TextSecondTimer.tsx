import React, { useEffect, useState } from 'react';

interface Props {
  timeoutInSeconds: number;
}

export default function TextSecondTimer({ timeoutInSeconds }: Props) {
  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState<number>(timeoutInSeconds);

  useEffect(() => {
    setTimeLeftInSeconds(timeoutInSeconds);
  }, [timeoutInSeconds]);

  useEffect(() => {
    const interval: ReturnType<typeof setTimeout> = setInterval(() => {
      const newTimeLeftInMillis = timeLeftInSeconds - 1;
      return newTimeLeftInMillis < 0
        ? clearInterval(interval)
        : setTimeLeftInSeconds((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{ timeLeftInSeconds }</>;
}
