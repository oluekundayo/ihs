import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/base/dashboard/overview',
          // children: [
          //   { label: 'Nfts', route: '/base/dashboard/nfts' },
          //   // { label: 'Podcast', route: '/dashboard/podcast' },
          // ],
        },
        {
          icon: 'assets/icons/order-icon.svg',
          label: 'Loading  Management',
          route: '/base/dashboard/order',
          // children: [
          //   { label: 'Nfts', route: '/base/dashboard/nfts' },
          //   // { label: 'Podcast', route: '/dashboard/podcast' },
          // ],
        },
        {
          icon: 'assets/icons/fleet-icon.svg',
          label: 'Dispense Management',
          route: '/base/dashboard/fleet',
          // children: [
          //   { label: 'Nfts', route: '/base/dashboard/nfts' },
          //   // { label: 'Podcast', route: '/dashboard/podcast' },
          // ],
        },
        {
          icon: 'assets/icons/stock-icon.svg',
          label: 'Registry',
          route: '/base/dashboard/registry',
          // children: [
          //   { label: 'Nfts', route: '/base/dashboard/nfts' },
          //   // { label: 'Podcast', route: '/dashboard/podcast' },
          // ],
        },
        {
          icon: 'assets/icons/user-icon.svg',
          label: 'E-way bills',
          route: '/base/dashboard/user',
          // children: [
          //   { label: 'Nfts', route: '/base/dashboard/nfts' },
          //   // { label: 'Podcast', route: '/dashboard/podcast' },
          // ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Profile',
          route: '/base/dashboard/profile',
        //   children: [
        //     { label: 'Sign up', route: '/auth/sign-up' },
        //     { label: 'Sign in', route: '/auth/sign-in' },
        //     { label: 'Forgot Password', route: '/auth/forgot-password' },
        //     { label: 'New Password', route: '/auth/new-password' },
        //     { label: 'Two Steps', route: '/auth/two-steps' },
        //   ],
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/shield-exclamation.svg',
        //   label: 'Erros',
        //   route: '/errors',
        //   children: [
        //     { label: '404', route: '/errors/404' },
        //     { label: '500', route: '/errors/500' },
        //   ],
        // },
      ],
    },
    {
      group: '',
      separator: false,
      items: [
        // {
        //   icon: 'assets/icons/heroicons/outline/download.svg',
        //   label: 'Help',
        //   route: '/#',
        // },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Logout',
          route: '/auth',
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/users.svg',
        //   label: 'Users',
        //   route: '/users',
        // },
      ],
    },
    // {
    //   group: 'Config',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/cog.svg',
    //       label: 'Settings',
    //       route: '/settings',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/bell.svg',
    //       label: 'Notifications',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/folder.svg',
    //       label: 'Folders',
    //       route: '/folders',
    //       children: [
    //         { label: 'Current Files', route: '/folders/current-files' },
    //         { label: 'Downloads', route: '/folders/download' },
    //         { label: 'Trash', route: '/folders/trash' },
    //       ],
    //     },
    //   ],
    // },
  ];
}
