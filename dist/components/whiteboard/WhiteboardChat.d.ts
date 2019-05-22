import * as React from "react";
import "./WhiteboardChat.less";
import { Room } from "white-web-sdk";
import { MessageType } from "./WhiteboardBottomRight";
export declare type WhiteboardChatProps = {
    room: Room;
    messages: MessageType[];
    number: string;
};
export declare type WhiteboardChatStates = {
    messages: MessageType[];
    url: string;
};
declare class WhiteboardChat extends React.Component<WhiteboardChatProps, WhiteboardChatStates> {
    private messagesEnd;
    constructor(props: WhiteboardChatProps);
    private scrollToBottom;
    componentDidMount(): Promise<void>;
    componentWillReceiveProps(): Promise<void>;
    render(): React.ReactNode;
}
export default WhiteboardChat;
