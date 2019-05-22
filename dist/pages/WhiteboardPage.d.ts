import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Room, RoomState, RoomPhase, PptConverter } from "white-react-sdk";
import "white-web-sdk/style/index.css";
import "./WhiteboardPage.less";
export declare enum MenuInnerType {
    HotKey = "HotKey",
    AnnexBox = "AnnexBox",
    PPTBox = "PPTBox",
    DocSet = "DocSet"
}
export declare type WhiteboardPageProps = RouteComponentProps<{
    uuid: string;
    number: string;
}>;
export declare type WhiteboardPageState = {
    phase: RoomPhase;
    connectedFail: boolean;
    didSlaveConnected: boolean;
    isHandClap: boolean;
    menuInnerState: MenuInnerType;
    isMenuVisible: boolean;
    roomToken: string | null;
    ossPercent: number;
    converterPercent: number;
    room?: Room;
    roomState?: RoomState;
    pptConverter?: PptConverter;
    isMenuLeft?: boolean;
    progressDescription?: string;
    fileUrl?: string;
    whiteboardLayerDownRef?: HTMLDivElement;
};
declare class WhiteboardPage extends React.Component<WhiteboardPageProps, WhiteboardPageState> {
    private didLeavePage;
    constructor(props: WhiteboardPageProps);
    private startJoinRoom;
    componentWillMount(): void;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    private renderMenuInner;
    private setWhiteboardLayerDownRef;
    private renderWhiteboard;
    private handleHotKeyMenuState;
    private handleAnnexBoxMenuState;
    private handlePPtBoxMenuState;
    private resetMenu;
    private isImageType;
    private renderClipView;
    private onDropFiles;
    private setMemberState;
    private progress;
    render(): React.ReactNode;
}
export default WhiteboardPage;
