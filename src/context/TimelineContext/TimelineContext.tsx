'use client'
import { createContext, useContext, useState } from 'react';

// Create the Context
const AnimationContext = createContext({
  menuAnimationComplete: false,
  handleMenuAnimationComplete: () => {},
});

interface AnimationProviderProps {
  children: React.ReactNode;
}

// Provide the Context
export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const [menuAnimationComplete, setMenuAnimationComplete] = useState(false);

  const handleMenuAnimationComplete = () => {
    setMenuAnimationComplete(true);
  };

  return (
    <AnimationContext.Provider
      value={{
        menuAnimationComplete,
        handleMenuAnimationComplete,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

// Custom Hook for Convenience
export const useAnimation = () => useContext(AnimationContext);