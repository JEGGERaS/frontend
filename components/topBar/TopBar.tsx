import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "constants/color-palette";
import ThemeButton from "./ThemeButton";
import NotificationButton from "./NotificationButton";
import UserDropdown from "./UserDropdown";

interface TopBarProps {
  page: string;
}

const TopBar = (props: TopBarProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  return <Box sx={{
    height: "7.2rem",
    top: "0px", 
    width: "100%",
    display: "flex",  
    flexDirection: "row",
    justifyContent: "space-between",  
    alignItems: "center",
    backgroundColor: theme.palette.mode === "light" ? colors.white[500] : colors.black[500],   
    borderBottom: `2px solid ${colors.black[100]}`,  
  }}>
    <Box sx={{marginLeft:"1rem", marginRight:"1rem"}}>
    <Typography variant="h2" color={theme.palette.mode === "light"? colors.black[700] : colors.white[500]}> {props.page ? props.page : "Sample text"}</Typography>
    </Box>
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    }}>
    <ThemeButton theme={theme.palette.mode} />
    <NotificationButton theme={theme.palette.mode} amount={100}/>
    <UserDropdown theme={theme.palette.mode} firstName="Łukasz" lastName="Kacperkowiak"/>
    </Box>
  </Box>;
};

export default TopBar;  