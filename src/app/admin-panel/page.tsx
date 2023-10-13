"use client";
import React, { useContext, useLayoutEffect } from "react";
import { RoleContext } from "../context/role";

const AdminPanel = () => {
  const { role } = useContext(RoleContext);

  console.log(role);
  useLayoutEffect(() => {
    console.log(role);
    if (role !== "Admin") window.location.href = "/admin-login";

    return () => {};
  }, [role]);

  return <div>AdminPanel</div>;
};

export default AdminPanel;
