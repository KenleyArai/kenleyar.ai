import { useEffect } from 'react';

const useLifeCycleHooks = ({ onMount, onUnmount }) =>
  useEffect(() => {
    onMount && onMount();
    return () => onUnmount && onUnmount();
  }, []);

const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);

const useOnMount = onMount =>
  useEffect(() => {
    onMount && onMount();
  }, []);

export { useLifeCycleHooks, useOnMount, useOnUnmount };
