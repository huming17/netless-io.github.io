import { CursorAdapter, CursorDescription, Cursor } from "white-react-sdk";
import "./UserCursor.less";
export declare type CursorComponentProps = {
    memberId: number;
};
export declare class UserCursor implements CursorAdapter {
    createCursor(memberId: number): CursorDescription & {
        readonly reactNode?: any;
    };
    onAddedCursor(cursor: Cursor): void;
    onRemovedCursor(cursor: Cursor): void;
}
