/** @jsxImportSource react */
import { useEffect, useState } from 'react';

type TDevice = 'small' | 'medium' | 'large';

export const useDeviceWidth = () => {
  const [device, setDevice] = useState<TDevice>('large');

  const checkDevice = (): TDevice => {
    if (window.innerWidth <= 768) {
      return 'small';
    }

    if (window.innerWidth < 1024) {
      return 'medium';
    }

    if (window.innerWidth > 1024) {
      return 'large';
    }
    return 'large';
  };

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => setDevice(checkDevice()));
    window.addEventListener('resize', () => setDevice(checkDevice()));
    return () => {
      window.addEventListener('DOMContentLoaded', () =>
        setDevice(checkDevice())
      );
      window.addEventListener('resize', () => setDevice(checkDevice()));
    };
  }, []);

  return {
    checkDevice,
    device,
    isSmallDevice: device === 'small',
    isMediumDevice: device === 'medium',
    isLargeDevice: device === 'large'
  };
};
