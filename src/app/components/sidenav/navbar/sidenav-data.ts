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
        items: [
            {
                routerlink: 'products/level1.1',
                label: 'Level 1.1',
                items: [
                    {
                        routerlink: 'products/level2.1',
                        label: 'Level 2.1',
                    },
                    {
                        routerlink: 'products/level2.2',
                        label: 'Level 2.2',
                        items: [
                            {
                                routerlink: 'products/level3.1',
                                label: 'Level 3.1'
                            },
                            {
                                routerlink: 'products/level3.2',
                                label: 'Level 3.2'
                            }
                        ]
                    }
                ]
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
                routerlink: 'coupens',
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
    },
];