import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';

declare module 'primereact/slidemenu' {

    type AppendToType = 'self' | HTMLElement | undefined | null;

    export interface SlideMenuProps {
        id?: string;
        model?: MenuItem[];
        popup?: boolean;
        style?: object;
        className?: string;
        easing?: string;
        effectDuration?: number;
        backLabel?: string;
        menuWidth?: number;
        viewportHeight?: number;
        autoZIndex?: boolean;
        baseZIndex?: number;
        appendTo?: AppendToType;
        transitionOptions?: object;
        onShow?(e: React.SyntheticEvent): void;
        onHide?(e: React.SyntheticEvent): void;
    }

    export class SlideMenu extends React.Component<SlideMenuProps, any> {
        public show(event: React.SyntheticEvent): void;
        public hide(event: React.SyntheticEvent): void;
        public toggle(event: React.SyntheticEvent): void;
    }
}
