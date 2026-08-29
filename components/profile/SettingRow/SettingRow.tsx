import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { styles } from "./SettingRow.styles";

interface SettingRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value?: string;
  isToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (val: boolean) => void;
  onPress?: () => void;
  isDanger?: boolean;
}

export function SettingRow({
  icon,
  label,
  value,
  isToggle,
  toggleValue,
  onToggle,
  onPress,
  isDanger,
}: SettingRowProps) {
  return (
    <Pressable
      style={[styles.card, isDanger && styles.dangerCard]}
      onPress={onPress}
      disabled={!onPress && !isToggle}
    >
      <View style={styles.leftSection}>
        <View style={[styles.iconBadge, isDanger && styles.dangerIconBadge]}>
          <Ionicons
            name={icon}
            size={18}
            color={isDanger ? "#E53935" : colors.primary}
          />
        </View>
        <Text style={[styles.label, isDanger && styles.dangerLabel]}>
          {label}
        </Text>
      </View>

      <View style={styles.rightSection}>
        {value && <Text style={styles.value}>{value}</Text>}

        {isToggle ? (
          <Switch
            value={toggleValue}
            onValueChange={onToggle}
            trackColor={{
              false: "#E8E8E8",
              true: "#DCEA8F",
            }}
            thumbColor="#FFFFFF"
          />
        ) : (
          <Ionicons
            name="chevron-forward"
            size={18}
            color={isDanger ? "#E53935" : "#708892"}
          />
        )}
      </View>
    </Pressable>
  );
}
