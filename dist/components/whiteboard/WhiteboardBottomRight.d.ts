import * as React from "react";
import "./WhiteboardBottomRight.less";
import { InjectedIntlProps } from "react-intl";
import { Room, RoomState } from "white-web-sdk";
export declare type MessageType = {
    name: string;
    avatar: string;
    id: string;
    messageInner: string[];
};
export declare type hotkeyTooltipState = {
    hotkeyTooltipDisplay: boolean;
    annexBoxTooltipDisplay: boolean;
    messages: MessageType[];
    seenMessagesLength: number;
    isVisible: boolean;
};
export declare type WhiteboardBottomRightProps = {
    room: Room;
    number: string;
    roomState: RoomState;
    handleHotKeyMenuState: () => void;
    handleAnnexBoxMenuState: () => void;
} & InjectedIntlProps;
declare const _default: React.ComponentClass<Pick<{
    room: Room;
    number: string;
    roomState: RoomState;
    handleHotKeyMenuState: () => void;
    handleAnnexBoxMenuState: () => void;
}, "number" | "room" | "roomState" | "handleHotKeyMenuState" | "handleAnnexBoxMenuState">, any> & {
    WrappedComponent: React.ComponentType<WhiteboardBottomRightProps>;
};
export default _default;
