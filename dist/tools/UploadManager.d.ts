import { Room, PptConverter, PptKind } from "white-react-sdk";
export declare type imageSize = {
    width: number;
    height: number;
};
export declare type NetlessImageFile = {
    width: number;
    height: number;
    file: File;
    coordinateX: number;
    coordinateY: number;
};
export declare type TaskType = {
    uuid: string;
    imageFile: NetlessImageFile;
};
export declare type PPTProgressListener = (phase: PPTProgressPhase, percent: number) => void;
export declare enum PPTProgressPhase {
    Uploading = 0,
    Converting = 1
}
export declare class UploadManager {
    private readonly ossClient;
    private readonly room;
    constructor(ossClient: any, room: Room);
    private createUUID;
    private getFileType;
    convertFile(rawFile: File, pptConverter: PptConverter, kind: PptKind, target: {
        bucket: string;
        folder: string;
        prefix: string;
    }, onProgress?: PPTProgressListener): Promise<void>;
    private getImageSize;
    uploadImageFiles(imageFiles: File[], x: number, y: number, onProgress?: PPTProgressListener): Promise<void>;
    private fetchWhiteImageFileWith;
    private uploadImageFilesArray;
    private handleUploadTask;
    private getFile;
    private addFile;
}
