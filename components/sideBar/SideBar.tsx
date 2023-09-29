import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Box, MenuList, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../constants/color-palette";
import HorizontalDivider from "../common/HorizontalDivider";
import Item from "./Item";

const SideBar = () => {
  const [selected, setSelected] = React.useState<string>("HOME");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="15rem"
      height="100vh"
      bgcolor={theme.palette.primary.main}
      display="flex"
      flexDirection="column"
      boxShadow="2"
    >
      <Box
        width="100%"
        height="7rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" fontWeight="bold" color={colors.black[900]}>
          JEGGER
        </Typography>
      </Box>
      <HorizontalDivider bgColor={colors.white[500]} variant="middle" />
      <MenuList sx={{ marginTop: "2rem" }}>
        <Item
          title="HOME"
          icon={<HomeRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="DASHBOARD"
          icon={<GridViewRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="ROZLICZENIA"
          icon={<DescriptionRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="DEALERZY"
          icon={<PeopleAltRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="ZADANIA"
          icon={<AssignmentRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="POWIADOMIENIA"
          icon={<NotificationsRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
      </MenuList>
    </Box>
  );
};

export default SideBar;
