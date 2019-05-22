import * as React from "react";
import { Room } from "white-react-sdk";
import "./WhiteboardBottomLeft.less";
import { RouteComponentProps } from "react-router";
import { InjectedIntlProps } from "react-intl";
export declare type WhiteboardBottomLeftInnerProps = {
    slice?: string;
    room: Room;
    uuid: string;
    number: string;
};
export declare type WhiteboardBottomLeftProps = RouteComponentProps<{}> & WhiteboardBottomLeftInnerProps & InjectedIntlProps;
declare const _default: React.ComponentClass<Pick<Pick<RouteComponentProps<{}, import("../../../node_modules/@types/react-router/index").StaticContext, any> & WhiteboardBottomLeftInnerProps, "number" | "history" | "location" | "match" | "staticContext" | "uuid" | "room" | "slice">, "number" | "uuid" | "room" | "slice">, any>;
export default _default;
