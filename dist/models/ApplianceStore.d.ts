import { Room, GlobalState, MemberState, BroadcastState, RoomState, RoomMember, Scene } from "white-react-sdk";
export interface ApplianceStore {
    readonly state?: ApplianceStateStore;
    registerRoom(room: Room): void;
    unregisterRoom(): void;
}
export interface ApplianceStateStore {
    readonly room: Room;
    readonly globalState: Readonly<GlobalState>;
    readonly memberState: Readonly<MemberState>;
    readonly broadcastState: BroadcastState;
    readonly scenes: ReadonlyArray<Scene>;
    readonly zoomScale: number;
    readonly sceneIndex: number;
    readonly scenePath: string;
    readonly roomMembers: ReadonlyArray<RoomMember>;
    zoomChange(scale: number): void;
    setMemberState(modifyState: Partial<MemberState>): void;
    setGlobalState(modifyState: Partial<GlobalState>): void;
    updateRoomState(modifyProps: Partial<RoomState>): void;
}
export declare const applianceStore: ApplianceStore;
