import * as React from "react";
import "./MenuPPTDoc.less";
import { SceneDefinition, Room } from "white-react-sdk";
export declare type MenuPPTDocProps = {
    room: Room;
};
export declare type PPTDataType = {
    active: boolean;
    cover: string;
    id: number;
    data: ReadonlyArray<SceneDefinition>;
};
export declare type MenuPPTDocStates = {
    docs: PPTDataType[];
    activeDocData?: PPTDataType;
};
declare class MenuPPTDoc extends React.Component<MenuPPTDocProps, MenuPPTDocStates> {
    constructor(props: MenuPPTDocProps);
    componentDidMount(): void;
    private selectDoc;
    render(): React.ReactNode;
}
export default MenuPPTDoc;
