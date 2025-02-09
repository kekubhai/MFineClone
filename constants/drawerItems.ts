// constants/drawerItems.ts
import { DrawerSection } from "@/.expo/types/drawer";

export const drawerSections: DrawerSection[] = [
  {
    title: 'MFINE CARE SERVICES',
    items: [
      {
        key: 'consult',
        label: 'Consult Now',
        icon: 'medical-bag',
        route: '/consult',
      },
      {
        key: 'packages',
        label: 'Book Health Packages',
        icon: 'package-variant-closed',
        route: '/packages',
      },
      {
        key: 'lab',
        label: 'Order Lab Test',
        icon: 'test-tube',
        route: '/lab-tests',
      },
      {
        key: 'medicines',
        label: 'Order Medicines',
        icon: 'pill',
        route: '/medicines',
      },
      {
        key: 'membership',
        label: 'MFine Membership',
        icon: 'card-account-details',
        route: '/membership',
      },
      {
        key: 'care',
        label: 'Care Programs',
        icon: 'heart-pulse',
        route: '/care-programs',
      },
      {
        key: 'tools',
        label: 'Tools and Trackers',
        icon: 'toolbox',
        route: '/tools',
      },
      {
        key: 'explore',
        label: 'Explore More',
        icon: 'compass',
        route: '/explore',
      },
    ],
  },
  {
    title: 'RECORDS',
    items: [
      {
        key: 'orders',
        label: 'My Orders',
        icon: 'shopping',
        route: '/orders',
      },
      {
        key: 'health-files',
        label: 'Health Files',
        icon: 'file-document',
        route: '/health-files',
      },
      {
        key: 'invoices',
        label: 'Invoices',
        icon: 'receipt',
        route: '/invoices',
      },
    ],
  },
];
