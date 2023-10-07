import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Box, Collapse, MenuList, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../constants/color-palette";
import HorizontalDivider from "../common/HorizontalDivider";
import Item from "./Item";

const SideBar = () => {
  const [selected, setSelected] = React.useState<string>("HOME");
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Box
      width={isCollapsed ? "4rem" : "15rem"}
      height="100vh"
      minWidth={isCollapsed ? "4rem" : "15rem"}
      bgcolor={theme.palette.primary.main}
      display="flex"
      flexDirection="column"
      boxShadow="2"
      sx={{
        transition: "width linear 0.3s",
      }}
    >
      <Box width="100%" height="7rem" display="flex" justifyContent="center" alignItems="center" overflow="clip">
        <Collapse in={!isCollapsed} orientation="horizontal" collapsedSize={20} timeout={700}>
          <Typography variant="h1" fontWeight="bold" color={colors.black[900]}>
            JEGGER
          </Typography>
        </Collapse>
      </Box>
      <HorizontalDivider bgColor={colors.white[500]} variant="middle" />
      <MenuList sx={{ marginTop: "2rem" }}>
        <Item
          collapsed={isCollapsed}
          title="HOME"
          icon={<HomeRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          collapsed={isCollapsed}
          title="DASHBOARD"
          icon={<GridViewRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          collapsed={isCollapsed}
          title="ROZLICZENIA"
          icon={<DescriptionRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          collapsed={isCollapsed}
          title="DEALERZY"
          icon={<PeopleAltRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          collapsed={isCollapsed}
          title="ZADANIA"
          icon={<AssignmentRoundedIcon fontSize="small" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          collapsed={isCollapsed}
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
