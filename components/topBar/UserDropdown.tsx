import { ExpandMore, LogoutRounded, PersonRounded, SettingsRounded } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem, MenuList, Typography, alpha, useTheme } from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { tokens } from "../../constants/color-palette";

interface UserDropdownProps {
  user: string;
  handleSettingsClick: () => void;
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
              borderRadius: popupState.isOpen ? "1.5rem 1.5rem 0.4rem 0.4rem" : "1.5rem",
              transition: "border-radius 0.25s ease-in-out",
              color:
                theme.palette.mode === "light"
                  ? popupState.isOpen
                    ? colors.white[500]
                    : colors.secondary[500]
                  : colors.white[500],
              backgroundColor:
                theme.palette.mode === "light"
                  ? popupState.isOpen
                    ? colors.secondary[500]
                    : colors.secondary[100]
                  : popupState.isOpen
                  ? colors.secondary[700]
                  : alpha(colors.secondary[700], 0.2),
              boxShadow: "none",
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? alpha(colors.secondary[200], 0.9)
                    : alpha(colors.secondary[700], 0.9),
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
              {props.user}
            </Typography>
            <ExpandMore
              sx={{
                transform: popupState.isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.35s ease-in-out",
              }}
            />
          </Button>
          <Menu
            MenuListProps={{ sx: { padding: 0 } }}
            {...bindMenu(popupState)}
            TransitionProps={{ timeout: { enter: 500, exit: 200 } }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor:
                  theme.palette.mode === "light" ? colors.secondary[500] : alpha(colors.secondary[700], 0.8),
                borderRadius: "0.4rem 0.4rem 1.5rem 1.5rem",
                boxShadow: "none",
                marginTop: "0.2rem",
                width: popupState.anchorEl ? popupState.anchorEl.clientWidth : "auto",
              },
            }}
          >
            <MenuList data-testid="user-dropdown-menu" sx={{ padding: 0 }}>
              <MenuItem
                data-testid="settings-open-dropdown-item"
                onClick={() => {
                  props.handleSettingsClick();
                  popupState.close();
                }}
                sx={{
                  height: "3.5rem",
                  backgroundColor:
                    theme.palette.mode === "light" ? colors.secondary[500] : alpha(colors.secondary[700], 1),
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? alpha(colors.secondary[600], 0.3)
                        : alpha(colors.secondary[600], 0.3),
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
                  height: "3.5rem",
                  backgroundColor:
                    theme.palette.mode === "light" ? colors.secondary[500] : alpha(colors.secondary[700], 1),
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? alpha(colors.secondary[600], 0.3)
                        : alpha(colors.secondary[600], 0.3),
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
