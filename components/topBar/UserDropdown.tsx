import { Box, Button, Menu, MenuItem, MenuList, Typography, alpha, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../constants/color-palette";
import { PersonRounded, ExpandMore, SettingsRounded, LogoutRounded } from "@mui/icons-material";
import HorizontalDivider from "../common/HorizontalDivider";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

interface UserDropdownProps {
  firstName: string;
  lastName: string;
}

const UserDropdown = (props: UserDropdownProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <Box data-testid="user-dropdown">
          <Button
            {...bindTrigger(popupState)}
            variant="contained"
            data-testid="user-dropdown-button"
            sx={{
              height: "3.5rem",
              width: "auto",
              maxWidth: "20rem",
              marginRight: "3rem",
              borderRadius: popupState.isOpen ? "2rem 2rem 0 0" : "2rem",
              transition: "border-radius 0.4s ease-in-out",
              color:
                theme.palette.mode === "light"
                  ? popupState.isOpen
                    ? colors.white[500]
                    : colors.secondary[500]
                  : colors.white[500],
              backgroundColor : theme.palette.mode === "light" ? 
              popupState.isOpen ? colors.secondary[500] : colors.secondary[100] :
              popupState.isOpen ? colors.secondary[700] : alpha(colors.secondary[700], 0.2),
              boxShadow: "none",
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? alpha(colors.secondary[200], 0.8)
                    : alpha(colors.secondary[700], 0.8),
                boxShadow: "none",
              },
            }}
          >
            <PersonRounded
              sx={{
                marginRight: "0.5rem",
                color:
                  theme.palette.mode === "light"
                    ? popupState.isOpen
                      ? colors.white[500]
                      : colors.secondary[500]
                    : colors.white[500],
              }}
            />
            <Typography
              variant={"h4"}
              sx={{
                marginRight: "1rem",
                fontWeight: "600",
                textTransform: "none",
                color:
                  theme.palette.mode === "light"
                    ? popupState.isOpen
                      ? colors.white[500]
                      : colors.secondary[500]
                    : colors.white[500],
              }}
            >
              {props.firstName} {props.lastName}
            </Typography>
            <ExpandMore
              sx={{
                transform: popupState.isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.35s ease-in-out",
              }}
            />
          </Button>
          <Menu
            {...bindMenu(popupState)}
            transitionDuration={{enter: 350, exit: 200}}
            TransitionProps={{ timeout: {enter: 500, exit: 200 }}}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: theme.palette.mode === "light" ?colors.secondary[500] : colors.secondary[700],
                borderBottomLeftRadius: "2rem",
                borderBottomRightRadius: "2rem",
                boxShadow: "none",
                padding: "0.5rem",
                marginTop: "-0.2rem",
                backgroundImage: "none",
                width: popupState.anchorEl ? popupState.anchorEl.clientWidth : "auto",
              },
            }}
          >
            <MenuList data-testid="user-dropdown-menu">
              <HorizontalDivider variant="middle" bgColor={colors.black[100]} />
              <MenuItem
                onClick={popupState.close}
                sx={{
                  marginTop: "1rem",
                  borderRadius: "2rem",
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? alpha(colors.secondary[200], 0.8)
                        : alpha(colors.secondary[700], 0.8),
                    boxShadow: "none",
                  },
                }}
              >
                <SettingsRounded
                  sx={{
                    marginRight: "1rem",
                    color:
                      theme.palette.mode === "light"
                        ? popupState.isOpen
                          ? colors.white[500]
                          : colors.secondary[500]
                        : colors.white[500],
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    marginRight: "1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    color:
                      theme.palette.mode === "light"
                        ? popupState.isOpen
                          ? colors.white[500]
                          : colors.secondary[500]
                        : colors.white[500],
                  }}
                >
                  Ustawienia
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                sx={{
                  marginTop: "1rem",
                  borderRadius: "2rem",
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? alpha(colors.secondary[200], 0.8)
                        : alpha(colors.secondary[700], 0.8),
                    boxShadow: "none",
                  },
                }}
              >
                <LogoutRounded
                  sx={{
                    marginRight: "1rem",
                    color:
                      theme.palette.mode === "light"
                        ? popupState.isOpen
                          ? colors.white[500]
                          : colors.secondary[500]
                        : colors.white[500],
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    marginRight: "1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    color:
                      theme.palette.mode === "light"
                        ? popupState.isOpen
                          ? colors.white[500]
                          : colors.secondary[500]
                        : colors.white[500],
                  }}
                >
                  Wyloguj
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </PopupState>
  );
};

export default UserDropdown;
