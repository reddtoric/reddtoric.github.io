import React from "react";
import Button from "@material-ui/core/Button";

export default (props) => {
  return (
    <Button
      disabled={props.disabled}
      variant="text"
      className={`${props.className} primary-color`}
      href={props.href}
      onClick={props.onClick}
      target={props.target}
      rel={props.target ? "noreferrer" : ""}
    >
      {props.children}
    </Button>
  );
};
