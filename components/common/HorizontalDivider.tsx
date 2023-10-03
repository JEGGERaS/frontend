import { Box } from "@mui/material";

interface HorizontalDividerProps {
  bgColor: string;
  variant: "fullWidth" | "middle";
  height?: string;
}

const HorizontalDivider = (props: HorizontalDividerProps) => {
  return (
    <Box display="flex" justifyContent="center">
      {props.variant === "fullWidth" ? (
        <Box
          width="100%"
          height={props.height ? props.height : "2px"}
          bgcolor={props.bgColor}
        />
      ) : (
        <Box
          width="90%"
          height={props.height ? props.height : "2px"}
          bgcolor={props.bgColor}
        />
      )}
    </Box>
  );
};

export default HorizontalDivider;
