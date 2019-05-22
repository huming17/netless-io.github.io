import * as React from "react";
import { PPTProgressListener } from "./UploadManager";
import "./UploadBtn.less";
import { Room } from "white-react-sdk";
export declare type ToolBoxUploadBoxState = {
    toolBoxColor: string;
};
export declare const FileUploadStatic: string;
export declare type UploadBtnProps = {
    oss: {
        accessKeyId: string;
        accessKeySecret: string;
        region: string;
        bucket: string;
        folder: string;
        prefix: string;
    };
    room: Room;
    roomToken: string | null;
    whiteboardRef?: HTMLDivElement;
    onProgress?: PPTProgressListener;
};
export default class UploadBtn extends React.Component<UploadBtnProps, ToolBoxUploadBoxState> {
    private readonly client;
    constructor(props: UploadBtnProps);
    private uploadStatic;
    private uploadDynamic;
    private uploadImage;
    render(): React.ReactNode;
}
