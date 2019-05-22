import * as React from "react";
import "./MenuHotKey.less";
import { InjectedIntlProps } from "react-intl";
export declare type MenuHotKeyProps = {
    handleHotKeyMenuState: () => void;
} & InjectedIntlProps;
declare const _default: React.ComponentClass<Pick<{
    handleHotKeyMenuState: () => void;
}, "handleHotKeyMenuState">, any> & {
    WrappedComponent: React.ComponentType<MenuHotKeyProps>;
};
export default _default;
