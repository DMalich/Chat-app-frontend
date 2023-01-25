import { FC, PropsWithChildren } from "react";
import {
    ModalContainerStyle,
    ModalHeaderStyle,
    ModalContentBodyStyle,
} from "../../utils/styles";

export const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
    return <ModalContainerStyle>{children}</ModalContainerStyle>;
};

export const ModalHeader: FC<PropsWithChildren> = ({ children }) => {
    return <ModalHeaderStyle>{children}</ModalHeaderStyle>;
};

export const ModalContentBody: FC<PropsWithChildren> = ({ children }) => {
    return <ModalContentBodyStyle>{children}</ModalContentBodyStyle>;
};
