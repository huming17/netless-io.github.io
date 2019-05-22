import * as React from "react";
import { Room } from "white-react-sdk";
import { InjectedIntlProps } from "react-intl";
import "./WhiteboardTopRight.less";
import { RouteComponentProps } from "react-router";
export declare type WhiteboardTopRightState = {
    scaleAnimation: boolean;
    reverseState: boolean;
    isFirst: boolean;
    isInviteVisible: boolean;
    isSetVisible: boolean;
};
export declare type WhiteboardTopRightProps = RouteComponentProps<{}> & InjectedIntlProps & {
    room: Room;
    number: string;
    uuid: string;
};
declare const _default: React.ComponentClass<Pick<Pick<RouteComponentProps<{}, import("../../../node_modules/@types/react-router/index").StaticContext, any> & {
    room: Room;
    number: string;
    uuid: string;
}, "number" | "history" | "location" | "match" | "staticContext" | "uuid" | "room">, "number" | "uuid" | "room">, any>;
export default _default;
