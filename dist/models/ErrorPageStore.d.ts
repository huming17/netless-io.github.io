import * as H from "history";
export declare enum PageErrorType {
    Page404 = "PasswordResetAccount",
    PageRoomNotFind = "PageRoomNotFind",
    PageRoomNotConnected = "PageRoomNotConnected"
}
export declare class ErrorPageStore {
    pageErrorState: PageErrorType;
    goToError404(history: H.History): void;
    goToErrorPageRoomNotFind(history: H.History): void;
}
export declare const errorPageStore: ErrorPageStore;
