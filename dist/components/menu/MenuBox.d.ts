import * as React from "react";
import { MenuInnerType } from "../../pages/WhiteboardPage";
export declare type MenuBoxStyleState = {
    menuStyles: any;
};
export declare type MenuBoxProps = {
    isVisible: boolean;
    menuInnerState: MenuInnerType;
    pageWrapId: string;
    outerContainerId: string;
    isLeft?: boolean;
    resetMenu: () => void;
};
export default class MenuBox extends React.Component<MenuBoxProps, MenuBoxStyleState> {
    constructor(props: MenuBoxProps);
    private getMenuStyle;
    render(): React.ReactNode;
}
