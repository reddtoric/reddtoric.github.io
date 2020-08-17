import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@mdi/react";

/*
  Summary: Returns Material UI primary colored outlined icon button group with tooltip.
  Props:
    buttons: [
      {
        tooltip: "tool tip of button",
        icon: material design icon,
        href: "button href",
      },
    ],
*/

export default (props) => {
  return (
    <ButtonGroup aria-label="outlined button group">
      {props.buttons.map((button, index) => {
        if (button.href !== undefined) {
          return (
            <Tooltip key={index} title={button.tooltip} placement="top">
              <Button
                className={`button-icon-group-border-color`}
                href={button.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon path={button.icon} className="primary-color" size={1} />
              </Button>
            </Tooltip>
          );
        }

        return null;
      })}
    </ButtonGroup>
  );
};
