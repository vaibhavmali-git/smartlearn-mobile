import { colors } from "@/theme";
import {
    AiBookIcon,
    Analytics01Icon,
    Home01Icon,
    Home02Icon,
    UserRoundIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React from "react";
import { Pressable } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./BottomTabBar.styles";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type TabItemProps = {
  route: BottomTabBarProps["state"]["routes"][number];
  index: number;
  isFocused: boolean;
  options: BottomTabBarProps["descriptors"][string]["options"];
  navigation: BottomTabBarProps["navigation"];
};

function TabItem({ route, isFocused, options, navigation }: TabItemProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = () => {
    scale.value = withSpring(0.92, {
      damping: 15,
      stiffness: 300,
    });
  };

  const onPressOut = () => {
    scale.value = withSpring(1, {
      damping: 12,
      stiffness: 250,
    });
  };

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  const iconColor = isFocused ? colors.onPrimary : colors.primary;

  const renderIcon = () => {
    switch (route.name) {
      case "index":
        return (
          <HugeiconsIcon
            icon={Home02Icon}
            size={19}
            color={iconColor}
            strokeWidth={2}
          />
        );

      case "ai":
        return (
          <HugeiconsIcon
            icon={AiBookIcon}
            size={20}
            color={iconColor}
            strokeWidth={2}
          />
        );

      case "analytics":
        return (
          <HugeiconsIcon
            icon={Analytics01Icon}
            size={19}
            color={iconColor}
            strokeWidth={2}
          />
        );

      case "profile":
        return (
          <HugeiconsIcon
            icon={UserRoundIcon}
            size={19}
            color={iconColor}
            strokeWidth={2}
          />
        );

      default:
        return (
          <HugeiconsIcon
            icon={Home01Icon}
            size={22}
            color={iconColor}
            strokeWidth={2}
          />
        );
    }
  };

  return (
    <AnimatedPressable
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarButtonTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.tabItem, isFocused && styles.tabItemActive, animatedStyle]}
    >
      {renderIcon()}
    </AnimatedPressable>
  );
}

export function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const bottomPosition = Math.max(insets.bottom, 16);

  return (
    <BlurView
      intensity={70}
      tint="light"
      style={[styles.container, { bottom: bottomPosition }]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        return (
          <TabItem
            key={route.key}
            route={route}
            index={index}
            isFocused={isFocused}
            options={options}
            navigation={navigation}
          />
        );
      })}
    </BlurView>
  );
}
