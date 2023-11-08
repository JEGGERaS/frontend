import { Button, Typography, alpha, useTheme } from "@mui/material";
import { tokens } from "constants/color-palette";

interface CustomButtonProps {
  text: string;
  width: string;
  bgcolor: string;
  variant?: "text" | "contained" | "outlined";
  color?: string;
  height?: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Button
      variant={props.variant ? props.variant : "contained"}
      sx={{
        backgroundColor: props.bgcolor,
        width: "90%",
        borderRadius: "0.5rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        color: props.color ? props.color : theme.palette.text.primary,
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light" ? alpha(colors.secondary[600], 1) : alpha(colors.secondary[600], 0.8),
        },
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "600" }}>
        zmiana hasła
      </Typography>
    </Button>
  );
};

export default CustomButton;
