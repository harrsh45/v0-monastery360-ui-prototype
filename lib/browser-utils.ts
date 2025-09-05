/**
 * Utility functions for safely handling browser-only code
 */

/**
 * Safely check if code is running in browser environment
 */
export const isBrowser = () => typeof window !== 'undefined';

/**
 * Safely access window object
 * @returns window object if in browser, undefined otherwise
 */
export const safeWindow = () => (isBrowser() ? window : undefined);

/**
 * Safely access document object
 * @returns document object if in browser, undefined otherwise
 */
export const safeDocument = () => (isBrowser() ? document : undefined);

/**
 * Safely execute a function only in browser environment
 * @param fn Function to execute in browser
 * @param fallback Optional fallback value to return in non-browser environment
 */
export const onlyBrowser = <T>(fn: () => T, fallback?: T): T | undefined => {
  if (isBrowser()) {
    return fn();
  }
  return fallback;
};