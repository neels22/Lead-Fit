import { createContext } from "react";

// Created a context to share both 'count' and 'setCount' across components
export const CountContext = createContext({
  count: 0,       // Default count value
  setCount: () => {}  // Placeholder function for setCount (to avoid errors if not wrapped in a provider)
});
