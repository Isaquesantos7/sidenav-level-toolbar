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
        label: 'Products'
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
        label: 'Settings'
    },
];