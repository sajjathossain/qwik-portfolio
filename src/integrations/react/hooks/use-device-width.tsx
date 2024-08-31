/** @jsxImportSource react */
import { useEffect, useState } from 'react';

type TDevice = 'small' | 'medium' | 'large';

const handleResize = (
  setDevice: React.Dispatch<React.SetStateAction<TDevice>>
) => {
  if (window.innerWidth <= 768) {
    return setDevice('small');
  }

  if (window.innerWidth < 1024) {
    return setDevice('medium');
  }

  if (window.innerWidth > 1024) {
    return setDevice('large');
  }

  return setDevice('large');
};

export const useDeviceWidth = () => {
  const [device, setDevice] = useState<TDevice>('large');

  useEffect(() => {
    handleResize(setDevice);
    window.addEventListener('DOMContentLoaded', () => handleResize(setDevice));
    window.addEventListener('resize', () => handleResize(setDevice));
    return () => {
      window.addEventListener('DOMContentLoaded', () =>
        handleResize(setDevice)
      );
      window.removeEventListener('resize', () => handleResize(setDevice));
    };
  }, []);

  return {
    device,
    isSmallDevice: device === 'small',
    isMediumDevice: device === 'medium',
    isLargeDevice: device === 'large'
  };
};
