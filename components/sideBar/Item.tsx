import {
  alpha,
  Collapse,
  ListItemIcon,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../constants/color-palette";

interface ItemProps {
  collapsed: boolean;
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
        "&:hover": {
          bgcolor: "transparent",
          color: theme.palette.secondary.main,
          width: "85%",
          borderRadius: "0 2rem 2rem 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
          transition: "all 0.4s",
        },
        "&.Mui-selected": {
          width: "85%",
          bgcolor: theme.palette.mode === 'light' ? colors.white[500] : colors.black[500],
          color: theme.palette.primary.main,
          borderRadius: "0 2rem 2rem 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        },
        "&.Mui-selected:hover": {
          width: "85%",
          animation: "none",
          bgcolor: theme.palette.mode === 'light' ? colors.white[500] : colors.black[500],
          color: theme.palette.primary.main,
          borderRadius: "0 2rem 2rem 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        },
      }}
      onClick={() => props.setSelected(props.title)}
    >
      <ListItemIcon sx={{ color: "inherit" }}>{props.icon}</ListItemIcon>
      <Collapse in={!props.collapsed} orientation="horizontal" timeout={500}>
        <Typography fontWeight="700" color="inherit">
          {props.title}
        </Typography>
      </Collapse>
    </MenuItem>
  );
};

export default Item;
