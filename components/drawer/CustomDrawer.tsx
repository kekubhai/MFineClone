import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { colors,spacing} from '../../constants/theme';
import { drawerSections } from '../../constants/drawerItems';

export const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const currentRoute = props.state.routes[props.state.index].name;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('../../assets/images/avatar-placeholder.png')}
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userPhone}>+91 9876543210</Text>
          </View>
        </View>
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <MaterialCommunityIcons 
            name="close" 
            size={24} 
            color={colors.text.primary} 
          />
        </Pressable>
      </View>

      <ScrollView style={styles.scrollView}>
        {drawerSections.map((section, index) => (
          <View key={section.title}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item) => (
              <Pressable
                key={item.key}
                style={[
                  styles.drawerItem,
                  currentRoute === item.route && styles.activeItem,
                ]}
                onPress={() => {
                  router.push(item.route as any);
                  props.navigation.closeDrawer();
                }}
              >
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={24}
                  color={
                    currentRoute === item.route
                      ? colors.primary
                      : colors.text.primary
                  }
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.drawerLabel,
                    currentRoute === item.route && styles.activeLabel,
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}
            {index < drawerSections.length - 1 && (
              <Divider style={styles.divider} />
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.version}>
          <Text style={styles.versionText}>Version 2.0.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userDetails: {
    marginLeft: spacing.sm,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  userPhone: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.secondary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    marginVertical: 2,
  },
  activeItem: {
    backgroundColor: colors.primary,
  },
  icon: {
    marginRight: spacing.md,
  },
  drawerLabel: {
    fontSize: 14,
    color: colors.text.primary,
  },
  activeLabel: {
    color: colors.primary,
    fontWeight: '600',
  },
  divider: {
    marginVertical: spacing.md,
  },
  footer: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
  },
  version: {
    alignItems: 'center',
  },
  versionText: {
    fontSize: 12,
    color: colors.text.secondary,
  },
});
