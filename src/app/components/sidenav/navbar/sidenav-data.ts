import { INavbarData } from "./sidenavLevel";

export const navbarData: INavbarData[] = [
    {
        routerlink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routerlink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
        expanded: false,
        items: [
            {
                routerlink: 'products/level2.1',
                label: 'Level 2.1',
            },
            {
                routerlink: 'products/level1.2',
                label: 'Level 1.2',
            }
        ]
    },
    {
        routerlink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routerlink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        expanded: false,
        items: [
            {
                routerlink: 'list/coupens',
                label: 'List Coupens'
            },
            {
                routerlink: 'create/coupens',
                label: 'Create Coupens'
            }
        ]
    },
    {
        routerlink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
    {
        routerlink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routerlink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: false,
        items: [
            {
                routerlink: 'settings/profile',
                label: 'Profile'
            },
            {
                routerlink: 'settings/customize',
                label: 'Customize'
            },
            {
                routerlink: 'settings/profile',
                label: 'Profile'
            },
            {
                routerlink: 'settings/customize',
                label: 'Customize'
            },
            {
                routerlink: 'settings/profile',
                label: 'Profile'
            },
            {
                routerlink: 'settings/customize',
                label: 'Customize'
            },
            {
                routerlink: 'settings/profile',
                label: 'Profile'
            },
            {
                routerlink: 'settings/customize',
                label: 'Customize'
            },
            {
                routerlink: 'settings/profile',
                label: 'Profile'
            },
            {
                routerlink: 'settings/customize',
                label: 'Customize'
            }
        ]
    },
];