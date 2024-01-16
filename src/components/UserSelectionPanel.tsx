import React from "react";
import UserCard from "./UserCard";
import { User } from "../utils/models";
import styles from "../app/index.module.scss";

interface UserSelectionPanelProps  {
  selectedUsers:User[];
  count: number;
  inputVal: string;
  deleteUser: (delUser: User) => void;

}

const UserSelectionPanel = ({ selectedUsers, deleteUser, count, inputVal }: UserSelectionPanelProps) => {
  return (
    <div
      className={`flex gap-[10px]  ${
        inputVal === "" && count % 2 === 1 ? styles.root : ""
      }`}
    >
      {selectedUsers.map((user: User, index: number) => (
        <UserCard key={index} user={user} index={index} deleteUser={deleteUser} />
      ))}
    </div>
  );
};

export default UserSelectionPanel;
