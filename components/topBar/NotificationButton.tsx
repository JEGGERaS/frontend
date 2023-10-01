import {Badge,IconButton, alpha, colors, useTheme } from "@mui/material";
import { NotificationsRounded } from "@mui/icons-material";
import React from "react";
import { tokens } from "../../constants/color-palette";



interface NotificationButtonProps {
    theme : string;
    amount: number;
}

const NotificationButton = (props : NotificationButtonProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  return(
    <IconButton
      aria-label="show new notifications"
      data-testid="notification-button"
      color="inherit"
      sx={{
      width: "3.5rem",
      height: "3.5rem",
      marginRight: "2rem",
      borderRadius: "1rem",
      "&:hover": {
          backgroundColor: theme.palette.mode === "light" ? alpha(colors.secondary[300], 0.8) : alpha(colors.secondary[700], 0.8 ),
      }}}>
      <Badge badgeContent={props.amount} color="error" max={99} overlap="circular" data-testid="notification-badge">
        <NotificationsRounded sx={{
            color: theme.palette.mode === "light" ? alpha(colors.secondary[500], 0.9) : alpha(colors.white[500], 0.9),   
            backgroundColor: theme.palette.mode==="light"? alpha(colors.secondary[100],0.8) : alpha(colors.secondary[700], 0.2),
            borderRadius: "1rem",
            width: "3.5rem",  
            height: "3.5rem",
            padding: "0.5rem",  
        }}/>
      </Badge>
    </IconButton>);
}

export default NotificationButton;