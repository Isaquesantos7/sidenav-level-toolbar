export interface INavbarData {
    routerlink: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    items?: INavbarData[];
}