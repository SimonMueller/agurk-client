import React, { useEffect, useState } from 'react';

interface Props {
  timeoutInSeconds: number;
}

export default function TextSecondTimer({ timeoutInSeconds }: Props) {
  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState<number>(timeoutInSeconds);

  useEffect(() => {
    const interval: number = setInterval(() => {
      const newTimeLeftInMillis = timeLeftInSeconds - 1;
      return newTimeLeftInMillis < 0
        ? clearInterval(interval)
        : setTimeLeftInSeconds(timeLeftInSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (<>{ timeLeftInSeconds }</>);
}
