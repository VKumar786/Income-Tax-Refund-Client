"use client";
import { createContext, useState } from "react";

/**
 * * Types in tsx
 */
type RoleContextType = {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * * Constants
 */

/**
 * * Utils
 */

export const RoleContext = createContext<RoleContextType>(
  {} as RoleContextType
);

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<string>("User");

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

// type RoleType = "User" | "Admin";
