export declare enum RoomType {
    transitory = "transitory",
    persistent = "persistent",
    historied = "historied"
}
export declare class RoomOperator {
    createRoomApi(name: string, limit: number, mode: RoomType): Promise<any>;
    joinRoomApi(uuid: string): Promise<any>;
    staticConversionApi(sourceUrl: string, targetBucket: string, targetFolder: string): Promise<any>;
}
