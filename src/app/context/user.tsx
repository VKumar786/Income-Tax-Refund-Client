"use client";
import { createContext, useState } from "react";

/**
 * * Types in tsx
 */
type UserContextType = {
  pan: string;
  setPan: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * * Constants
 */

/**
 * * Utils
 */

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [pan, setPan] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  return (
    <UserContext.Provider
      value={{
        pan,
        setPan,
        phone,
        setPhone,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
