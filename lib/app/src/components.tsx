import * as React from "react";
import { Dialog } from "@reach/dialog";
import { Close } from "./icons";

export const Button: React.FC<{
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}> = ({ children, onClick, style }) => {
  return (
    <button className="ladle-button" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export const Code: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <code className="ladle-code">{children}</code>;
};

export const Modal: React.FC<{
  children: React.ReactNode;
  close: () => void;
  isOpen: boolean;
}> = ({ children, close, isOpen }) => (
  <Dialog isOpen={isOpen} onDismiss={() => close()}>
    <div
      style={{
        position: "absolute",
        insetInlineEnd: "-6px",
        top: "0px",
      }}
    >
      <Button
        onClick={() => close()}
        aria-label="Close modal"
        style={{
          height: "36px",
          width: "36px",
          borderColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Close />
      </Button>
    </div>
    {children}
  </Dialog>
);