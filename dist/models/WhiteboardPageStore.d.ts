import { RoomType } from "../apiMiddleware";
export declare class WhiteboardPageStore {
    whiteboardLayerDownRef: HTMLDivElement | null;
    isPlayerSeeking: boolean;
    createRoomAndGetUuid(room: string, limit: number, mode: RoomType): Promise<string | null>;
    joinRoom(uuid: string): Promise<string | null>;
}
export declare const whiteboardPageStore: WhiteboardPageStore;
