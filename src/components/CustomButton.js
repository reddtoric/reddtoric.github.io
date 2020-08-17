import React from "react";
import Button from "@material-ui/core/Button";

/*
  Summary: Return Material UI primary colored text variant button.
  props:
    children,
    disabled: (optional) bool,
    className: (optional) "additional classname",
    href: (optional) "button href",
    onClick: (optional) function,
    target: (optional) "_blank"
*/

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
