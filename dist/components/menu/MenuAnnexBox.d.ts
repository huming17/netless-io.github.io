import * as React from "react";
import { Room, RoomState } from "white-react-sdk";
import "./MenuAnnexBox.less";
export declare type MenuAnnexBoxState = {
    isFocus: boolean;
    hoverCellIndex: number | null;
};
export declare type MenuAnnexBoxProps = {
    room: Room;
    roomState: RoomState;
    handleAnnexBoxMenuState: () => void;
};
declare class MenuAnnexBox extends React.Component<MenuAnnexBoxProps, MenuAnnexBoxState> {
    private ref;
    constructor(props: MenuAnnexBoxProps);
    private arrowControllerHotKey;
    private removeScene;
    private setScenePath;
    private pathName;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default MenuAnnexBox;
