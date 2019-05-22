import * as React from "react";
import { PlayerPhase, Player } from "white-react-sdk";
import "./PlayerPage.less";
import { RouteComponentProps } from "react-router";
export declare type PlayerPageProps = RouteComponentProps<{
    uuid: string;
    number: string;
}> & RouteComponentProps<{
    number: string;
}>;
export declare type PlayerPageStates = {
    player: Player | null;
    phase: PlayerPhase;
    currentTime: number;
    isFullScreen: boolean;
    isFirstScreenReady: boolean;
    isHandClap: boolean;
};
declare class PlayerPage extends React.Component<PlayerPageProps, PlayerPageStates> {
    private scheduleTime;
    constructor(props: PlayerPageProps);
    componentDidMount(): Promise<void>;
    private enterFullScreen;
    private exitFullScreen;
    private operationButton;
    private getCurrentTime;
    private onClickOperationButton;
    private renderScheduleView;
    render(): React.ReactNode;
}
export default PlayerPage;
