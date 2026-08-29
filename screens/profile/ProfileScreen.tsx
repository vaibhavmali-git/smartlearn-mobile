import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { ProfileHeader } from "@/components/profile/ProfileHeader/ProfileHeader";
import { SettingRow } from "@/components/profile/SettingRow/SettingRow";
import { useAuth } from "@/hooks/useAuth";
import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import { styles } from "./ProfileScreen.styles";

export function ProfileScreen() {
  const { user, logout, updateUser } = useAuth();
  const router = useRouter();
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
    <ScreenContainer scrollable hasTabBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.bellBadge}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={colors.primary}
            />
            <View style={styles.notificationDot} />
          </View>
        </View>

        <ProfileHeader user={user} />

        <View style={styles.listContainer}>
          <SettingRow
            icon="person-outline"
            label="Personal Information"
            onPress={handleOpenEdit}
          />
          <SettingRow
            icon="bar-chart-outline"
            label="My Progress"
            onPress={() => console.log("Route to Progress")}
          />
          <SettingRow
            icon="trophy-outline"
            label="Achievements"
            onPress={() => console.log("Route to Achievements")}
          />
          <SettingRow
            icon="settings-outline"
            label="Settings"
            onPress={() => console.log("Route to Settings")}
          />
          <SettingRow
            icon="help-circle-outline"
            label="Help & Support"
            onPress={() => console.log("Route to Help")}
          />
          <SettingRow icon="log-out-outline" label="Logout" onPress={logout} />
        </View>
      </ScrollView>

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
