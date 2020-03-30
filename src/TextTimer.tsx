import React, { useEffect, useState } from 'react';

interface Props {
  timeoutInMillis: number;
}

export default function TextTimer({ timeoutInMillis }: Props) {
  const [timeLeftInMillis, setTimeLeftInMillis] = useState<number>(timeoutInMillis);
  const timeLeftInSeconds = Math.floor(timeLeftInMillis / 1000);

  useEffect(() => {
    const interval: number = setInterval(() => {
      const newTimeLeftInMillis = timeLeftInMillis - 1000;
      return newTimeLeftInMillis < 0
        ? clearInterval(interval)
        : setTimeLeftInMillis(timeLeftInMillis - 1000);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (<>{ timeLeftInSeconds }</>);
}
