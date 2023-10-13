"use client";
import { useContext, useEffect, useState } from "react";
import LargeWithLogoLeft from "@/components/Footer";
import WithSubnavigation from "@/components/UserNavbar";
import { RoleContext } from "./context/role";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { role } = useContext(RoleContext);
  return (
    <>
      {role === "User" && <WithSubnavigation />}
      {children}
      {role === "User" && <LargeWithLogoLeft />}
    </>
  );
};

export default MainLayout;
