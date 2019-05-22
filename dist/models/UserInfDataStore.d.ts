export declare enum UserInfType {
    name = "name",
    uuid = "uuid"
}
export declare class MiniPersistStore {
    updateUserInf(name: string, uuid: string, index: string): void;
    getUserInf(type: UserInfType, index: string): string;
    logout(): void;
}
export declare const userInfDataStore: MiniPersistStore;
