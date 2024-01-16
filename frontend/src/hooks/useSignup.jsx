import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useContext } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (email, password) => {};
};
