import { Box, Button, Menu, MenuItem, MenuList, Typography, alpha, colors, useTheme } from "@mui/material";
import React, {useState } from "react";
import { tokens } from "constants/color-palette";
import { PersonRounded, ExpandMore, SettingsRounded, LogoutRounded } from "@mui/icons-material";
import HorizontalDivider from "../common/HorizontalDivider";

interface UserDropdownProps {
  theme: string;
  firstName: string;
  lastName: string;
}


const UserDropdown = (props: UserDropdownProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box> 
      <Button onClick={handleClick} variant="contained"
       sx={{
        height: "3.5rem",
        width: "auto",
        maxWidth: "20rem",
        marginRight: "3rem",
        borderRadius: isOpen ? "1rem 1rem 0 0" : "1rem",
        color: theme.palette.mode === "light" ? (isOpen ? colors.white[500] : colors.secondary[500]) : colors.white[500],
        backgroundColor: isOpen ? colors.secondary[500] : theme.palette.mode === "light" ? colors.secondary[100] : alpha(colors.secondary[700], 0.2),
        boxShadow: "none",
        "&:hover": {
          backgroundColor: theme.palette.mode === "light" ? alpha(colors.secondary[200], 0.8) : alpha(colors.secondary[700], 0.8),
          boxShadow: "none",
        },
      }}
      >
        <PersonRounded sx={{
          marginRight: "0.5rem",
          color: theme.palette.mode === "light" ? (isOpen ? colors.white[500] : colors.secondary[500]) : colors.white[500],
        }} />
        <Typography variant={"h4"} sx={{
          marginRight: "1rem",
          fontWeight: "600",
          textTransform: "none",
          color: theme.palette.mode === "light" ? (isOpen ? colors.white[500] : colors.secondary[500]) : colors.white[500],
        }}>{props.firstName} {props.lastName}</Typography>
        <ExpandMore sx={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.35s ease-in-out",
        }} />
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transitionDuration={2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ 
          '& .MuiPaper-root': {
            backgroundColor: colors.secondary[500],
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",  
            boxShadow: "none",
            padding: "0.5rem",
            marginTop: "-0.2rem",
            backgroundImage: "none",
            width: anchorEl && anchorEl.offsetWidth,
          }
        }}
      >
        <MenuList>
        <HorizontalDivider variant="middle" bgColor={colors.black[100]} />
        <MenuItem onClick={handleClose} sx={{
          marginTop:"1rem",
          borderRadius:"1rem",
          "&:hover": {
            backgroundColor: theme.palette.mode === "light" ? alpha(colors.secondary[200], 0.8) : alpha(colors.secondary[700], 0.8),
            boxShadow: "none",
          }}}>
          <SettingsRounded sx={{
            marginRight: "1rem",
            color: theme.palette.mode === "light" ? (isOpen ? colors.white[500] : colors.secondary[500]) : colors.white[500],
          }} />
          <Typography variant="h5" sx={{
            marginRight: "1rem",
            fontWeight: "600",
            textTransform: "uppercase",
            color: theme.palette.mode === "light" ? (isOpen ? colors.white[500] : colors.secondary[500]) : colors.white[500],
          }}>
            Ustawienia
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{
          marginTop:"1rem",
          marginBottom:"1rem",
          borderRadius:"1rem",
          "&:hover": {
            backgroundColor: theme.palette.mode === "light" ? alpha(colors.secondary[200], 0.8) : alpha(colors.secondary[700], 0.8),
            boxShadow: "none",
          }
          }}>
          <LogoutRounded sx={{
            marginRight: "1rem",
            color: theme.palette.mode === "light" ? (isOpen ? colors.white[500] : colors.secondary[500]) : colors.white[500],
          }} />
          <Typography variant="h5" sx={{  
            marginRight: "1rem",
            fontWeight: "600",
            textTransform: "uppercase",
            color: theme.palette.mode === "light" ? (isOpen ? colors.white[500] : colors.secondary[500]) : colors.white[500],
          }}>
            Wyloguj
          </Typography>
        </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );  
}

export default UserDropdown;