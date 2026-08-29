import { useState } from "react";

export function useProfileEditor(initialName: string | undefined) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editNameValue, setEditNameValue] = useState(initialName || "");

  const openEdit = () => {
    setEditNameValue(initialName || "");
    setIsEditModalVisible(true);
  };

  const closeEdit = () => {
    setIsEditModalVisible(false);
  };

  return {
    isEditModalVisible,
    editNameValue,
    setEditNameValue,
    openEdit,
    closeEdit,
  };
}
