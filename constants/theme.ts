
import type { Theme } from '@react-navigation/native';
import type { MD3Theme } from 'react-native-paper';


type FontConfig = {
  regular: string;
  medium: string;
  light: string;
  thin: string;
};




export const palette = {
  primary: '#0891B2',
  primaryLight: '#BAE6FD',
  primaryDark: '#0E7490',
  secondary: '#FF4081',
  secondaryLight: '#FF80AB',
  secondaryDark: '#F50057',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#FF5252',
  info: '#2196F3',
  white: '#FFFFFF',
  black: '#000000',
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
} as const;


export const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
} as const;


export const typography = {
  fonts: {
    regular: 'System',
    medium: 'System',
    light: 'System',
    thin: 'System',
  } as FontConfig,
  sizes: {
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    body1: 16,
    body2: 14,
    caption: 12,
    small: 10,
  },
  lineHeights: {
    h1: 40,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 22,
    body1: 24,
    body2: 20,
    caption: 16,
    small: 14,
  },
} as const;


export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

// Shadows
export const shadows = {
  none: {
    shadowColor: undefined,
    shadowOffset: undefined,
    shadowOpacity: undefined,
    shadowRadius: undefined,
    elevation: undefined,
  },
  xs: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
} as const;

export const colors = {
  primary: palette.primary,
  secondary: palette.secondary,
  success: palette.success,
  warning: palette.warning,
  error: palette.error,
  info: palette.info,
  white: palette.white,
  black: palette.black,
  grey: palette.grey,
  background: palette.white,
  text: {
    primary: palette.black,
    secondary: palette.grey[600],
    disabled: palette.grey[400],
    hint: palette.grey[500],
  },
  border: {
    light: palette.grey[300],
    dark: palette.grey[700],
  },
  surface: palette.white,
  shadow: palette.grey[300],
} as const;



// Layout constants
export const layout = {
  screenPadding: spacing.md,
  containerWidth: '100%',
  maxWidth: 1200,
  bottomTabHeight: 60,
  headerHeight: 56,
} as const;

// Shared styles
export const commonStyles = {
  shadow: shadows.sm,
  card: {
    backgroundColor: palette.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.sm,
  },
  section: {
    marginVertical: spacing.md,
  },
  row: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  center: {
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
};

// Export types for TypeScript
export type Spacing = typeof spacing;
export type Palette = typeof palette;
export type Typography = typeof typography;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
export type Layout = typeof layout;

export default {
  palette,
  spacing,
  typography,
  borderRadius,
  shadows,
  colors,
  layout,
  commonStyles,
};