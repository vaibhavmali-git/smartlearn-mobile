import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { ProfileHeader } from "@/components/profile/ProfileHeader/ProfileHeader";
import { SettingRow } from "@/components/profile/SettingRow/SettingRow";
import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import { styles } from "./ProfileScreen.styles";

export function ProfileScreen() {
  const { user, logout, updateUser } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editNameValue, setEditNameValue] = useState("");

  const handleOpenEdit = () => {
    setEditNameValue(user?.name || "");
    setIsEditModalVisible(true);
  };

  const handleSaveName = async () => {
    if (editNameValue.trim()) {
      await updateUser({ name: editNameValue.trim() });
    }
    setIsEditModalVisible(false);
  };

  return (
    <ScreenContainer scrollable hasTabBar backgroundColor="#FFFFFF">
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ProfileHeader user={user} />

      <Text style={styles.sectionTitle}>Account</Text>
      <SettingRow
        icon="person-outline"
        label="Edit Name"
        onPress={handleOpenEdit}
      />

      <Text style={styles.sectionTitle}>Settings</Text>
      <SettingRow
        icon="notifications-outline"
        label="Notifications"
        isToggle
        toggleValue={notificationsEnabled}
        onToggle={setNotificationsEnabled}
      />

      <Text style={styles.sectionTitle}>Session</Text>
      <SettingRow
        icon="log-out-outline"
        label="Log Out"
        isDanger
        onPress={logout}
      />

      <Modal visible={isEditModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Name</Text>
            <Input
              value={editNameValue}
              onChangeText={setEditNameValue}
              placeholder="Enter your name"
              autoFocus
            />
            <View style={styles.modalActions}>
              <Button
                title="Cancel"
                variant="ghost"
                onPress={() => setIsEditModalVisible(false)}
                size="sm"
              />
              <Button
                title="Save"
                variant="primary"
                onPress={handleSaveName}
                size="sm"
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
}
