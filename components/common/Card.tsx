import { Box, useTheme } from "@mui/material";
import { tokens } from "../../constants/color-palette";

interface CardProps {
  children: JSX.Element | JSX.Element[];
  bgcolor?: string;
  shadowColor?: string;
}

const Card = (props: CardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      bgcolor={props.bgcolor ? props.bgcolor : colors.white[500]}
      borderRadius="0.8rem"
      padding="1rem"
      boxShadow={`0px 1px 6px -3px ${props.shadowColor ? props.shadowColor : colors.black[500]}`}
    >
      {props.children}
    </Box>
  );
};

export default Card;
