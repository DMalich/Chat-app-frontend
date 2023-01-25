import { FC, PropsWithChildren } from "react";
import { ModalContainerStyle, ModalHeaderStyle } from "../../utils/styles";

export const ModalHeader: FC<PropsWithChildren> = ({ children }) => {
    return <ModalHeaderStyle>{children}</ModalHeaderStyle>;
};

// export const ModalContentBody: FC<PropsWithChildren> = ({ children }) => {
//     return <ModalContentBodyStyle>{children}</ModalContentBodyStyle>;
// };
  
export const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
    return <ModalContainerStyle>{children}</ModalContainerStyle>;
};

export const ModalContentBody: FC<PropsWithChildren> = ({ children }) => {
    return <div>{children}</div>;
};
  
