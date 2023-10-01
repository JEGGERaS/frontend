import { ListItemIcon, MenuItem, Typography, useTheme } from "@mui/material";
import { tokens } from "../../constants/color-palette";

interface ItemProps {
  id: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}

const CollapsedItem = (props: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      selected={props.selected === props.id}
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
      onClick={() => props.setSelected(props.id)}
    >
      <ListItemIcon sx={{ color: "inherit" }}>{props.icon}</ListItemIcon>
    </MenuItem>
  );
};

export default CollapsedItem;