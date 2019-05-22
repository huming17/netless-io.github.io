import * as React from "react";
import "./WhiteboardTopLeft.less";
import { RouteComponentProps } from "react-router";
import { InjectedIntlProps } from "react-intl";
import { Room } from "white-react-sdk";
export declare type WhiteboardTopLeftState = {
    isMouseOn: boolean;
    isVisible: boolean;
};
export declare type WhiteboardTopLeftProps = RouteComponentProps<{}> & InjectedIntlProps & {
    room: Room;
};
declare const _default: React.ComponentClass<Pick<Pick<RouteComponentProps<{}, import("../../../node_modules/@types/react-router/index").StaticContext, any> & {
    room: Room;
}, "history" | "location" | "match" | "staticContext" | "room">, "room">, any>;
export default _default;
