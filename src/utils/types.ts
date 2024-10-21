
type itemDropdown = {
    title: string;
    path: string;
};
export interface DropdownProps {
    title: string;
    items: itemDropdown[];
}

export interface HeaderProps {
    banner: string;
    isMainPage: boolean;
    title?: string;
}

export interface AthleteCardProps {
    name: string;
    belt: string;
    image: string;
    description: string;
}
