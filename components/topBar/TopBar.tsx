import React from "react";
import { Box, Typography, alpha, useTheme } from "@mui/material";
import { tokens } from "../../constants/color-palette";
import ThemeButton from "./ThemeButton";
import NotificationButton from "./NotificationButton";
import UserDropdown from "./UserDropdown";

interface TopBarProps {
  page: string;
  handleSettingsClick: () => void;
}

const TopBar = (props: TopBarProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      data-testid="top-bar"
      sx={{
        height: "7.2rem",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `2px solid ${
          theme.palette.mode === "light" ? alpha(colors.black[500], 0.05) : alpha(colors.white[500], 0.05)
        }`,
      }}
    >
      <Box sx={{ marginLeft: "1rem", marginRight: "1rem" }}>
        {props.page ? (
          <Typography
            variant="h2"
            color={theme.palette.text.secondary}
            sx={{ fontWeight: "600" }}
          >
            {props.page}
          </Typography>
        ) : null}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <ThemeButton />
        <NotificationButton theme={theme.palette.mode} amount={100} />
        <UserDropdown user="Łukasz Kacperkowiak" handleSettingsClick={props.handleSettingsClick}/>
      </Box>
    </Box>
  );
};

export default TopBar;
