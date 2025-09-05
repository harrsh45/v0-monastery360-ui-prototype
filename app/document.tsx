'use client';

import { useEffect, useState } from 'react';

/**
 * This component provides a safe way to handle browser-only code
 * by ensuring it only runs after the component is mounted in the browser
 */
export default function SafeHydration({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If the component hasn't mounted yet, render nothing or a fallback
  if (!hasMounted) {
    return null; // or return a loading spinner/placeholder
  }

  // Otherwise, render children normally
  return <>{children}</>;
}