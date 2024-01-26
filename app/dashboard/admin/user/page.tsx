import React from "react";
import User from "../../_components/User/User";
import getAllUsers from "@/app/actions/getAllUsers";

const page = async () => {
  const allUsers = await getAllUsers();
  console.log("all users", allUsers)
  return (
    <div>
      <User allUsers={allUsers?.data} />
    </div>
  );
};

export default page;
