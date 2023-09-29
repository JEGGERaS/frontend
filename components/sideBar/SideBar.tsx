import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import {
  Box,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "constants/color-palette";
import React from "react";
import HorizontalDivider from "../common/HorizontalDivider";

interface ItemProps {
  title: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}

const Item = (props: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      selected={props.selected === props.title}
      sx={{
        color: colors.white[500],
        marginTop: "1rem",
        borderLeft: "4px solid transparent",
        height: "2.5rem",
        width: "40%",
        transition: "all 0.3s",
        "&:hover": {
          width: "85%",
          bgcolor: colors.white[500],
          color: theme.palette.primary.main,
          borderRadius: "0 2rem 2rem 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        },
        "&.Mui-selected": {
          width: "85%",
          bgcolor: colors.white[500],
          color: theme.palette.primary.main,
          borderRadius: "0 2rem 2rem 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        },
        "&.Mui-selected:hover": {
          width: "85%",
          bgcolor: colors.white[500],
          color: theme.palette.primary.main,
          borderRadius: "0 2rem 2rem 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        },
      }}
      onClick={() => props.setSelected(props.title)}
    >
      <ListItemIcon sx={{ color: "inherit" }}>{props.icon}</ListItemIcon>
      <Typography fontWeight="700" color="inherit">
        {props.title}
      </Typography>
    </MenuItem>
  );
};

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
