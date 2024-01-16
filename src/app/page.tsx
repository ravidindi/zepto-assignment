"use client";
import React, { useState, useEffect, useRef } from "react";
import UserSelectionPanel from "@/components/UserSelectionPanel";
import { User } from "../utils/models";
import { allUsers } from "../utils/helper";
import UserSuggestionsDropdown from "@/components/UserSuggestionsDropdown";

export default function UserSelector() {
  const [inputValue, setInputValue] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [allAvailableUsers, setAllAvailableUsers] = useState<User[]>(allUsers);
  const [showUserSuggestions, setShowUserSuggestions] = useState(false);
  const [backspaceCount, setBackspaceCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [filteredUserSuggestions, setFilteredUserSuggestions] = useState<User[]>(allUsers);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setShowUserSuggestions(true);
    
    if (value !== "") {
      const filteredUsers = filteredUserSuggestions.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUserSuggestions(filteredUsers);
    } else {
      setFilteredUserSuggestions(allAvailableUsers);
    }
  };

  const handleUserSelect = (selectedUser: User, shouldShowUserSuggestions: boolean) => {
    setBackspaceCount(0);
    const remainingUsers = allAvailableUsers.filter((user) => user.id !== selectedUser.id);
    setAllAvailableUsers(remainingUsers);
    setSelectedUsers([...selectedUsers, selectedUser]);
    shouldShowUserSuggestions ? setShowUserSuggestions(true) : setShowUserSuggestions(false);
    setInputValue("");
    setFilteredUserSuggestions(remainingUsers);
  };

  const handleInputFocus = () => {
    setShowUserSuggestions(true);
  };

  const handleUserDeletion = (deletedUser: User) => {
    const updatedUsers = selectedUsers.filter((user) => user.id !== deletedUser.id);
    setSelectedUsers(updatedUsers);
    setAllAvailableUsers([...allAvailableUsers, deletedUser]);
    setFilteredUserSuggestions([...filteredUserSuggestions, deletedUser]);
  };

  useEffect(() => {
    const handleBackspacePress = (event: KeyboardEvent) => {
      if (event.key === "Backspace" && inputValue === "") {
        setBackspaceCount((prevCount) => prevCount + 1);
      }
    };

    document.addEventListener("keydown", handleBackspacePress);

    if (inputValue === "" && selectedUsers.length > 0 && backspaceCount > 0 && backspaceCount % 2 === 0) {
      const lastSelectedUser = selectedUsers[selectedUsers.length - 1];
      handleUserDeletion(lastSelectedUser);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowUserSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleBackspacePress);
    };
  }, [backspaceCount, showUserSuggestions]);

  return (
    <div className="py-[60px] w-[60%] mx-auto">
      <h1 className="mb-[30px] text-blue-700 text-center text-[24px] font-bold">
        Add Users
      </h1>
      <div className={`flex flex-wrap gap-[10px] items-start border-b-[5px] border-blue-400 border-solid pb-[10px]`}>
        <UserSelectionPanel
          selectedUsers={selectedUsers}
          deleteUser={handleUserDeletion}
          count={backspaceCount}
          inputVal={inputValue}
        />
        <div className="relative mt-[5px]" ref={containerRef}>
          <input
          autoFocus
            type="text"
            placeholder="Add new user..."
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="border-none outline-none focus:ring-0"
          />

          {showUserSuggestions && filteredUserSuggestions.length > 0 ? (
            <UserSuggestionsDropdown
              filteredUsers={filteredUserSuggestions}
              inputValue={inputValue}
              handleUserSelect={handleUserSelect}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
