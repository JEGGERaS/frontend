import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Box, Button, IconButton, Modal, Typography, alpha, useTheme } from "@mui/material";
import { tokens } from "../../constants/color-palette";
import HorizontalDivider from "../common/HorizontalDivider";
import CustomTextField from "./CustomTextField";
import CustomButton from "../common/CustomButton";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: string;
}

const SettingsModal = (props: SettingsModalProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Modal open={props.isOpen} onClose={props.onClose} data-testid="settings-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "33rem",
          border: `2px solid ${
            theme.palette.mode === "light" ? alpha(colors.black[500], 0.05) : alpha(colors.white[500], 0.05)
          }`,
          borderRadius: "2rem",
          backgroundColor: theme.palette.mode === "light" ? colors.white[500] : colors.black[500],
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "2rem 2rem 0 0",
            margin: "1rem 1rem 0.5rem 1rem",
          }}
        >
          <Typography variant="h3" sx={{ marginLeft: "1rem", fontWeight: 600 }}>
            Ustawienia
          </Typography>
          <IconButton
            onClick={props.onClose}
            sx={{ marginRight: "1rem", color: theme.palette.mode === "light" ? colors.black[500] : colors.white[500] }}
          >
            <HighlightOffRoundedIcon />
          </IconButton>
        </Box>
        <HorizontalDivider
          bgColor={theme.palette.mode === "light" ? alpha(colors.black[500], 0.2) : alpha(colors.white[500], 0.2)}
          variant={"middle"}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "space-evenly",
            flexDirection: "column",
            margin: "1.5rem 0 1.5rem 0",
          }}
        >
          <CustomTextField value={props.user} label={"imie"} />
          <CustomTextField value={props.user} label={"nazwisko"} />
          <CustomTextField value={props.user} label={"stanowisko"} />
          <CustomTextField value={props.user} label={"email"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomButton
            text="zmiana hasła"
            width="90%"
            bgcolor={colors.secondary[500]}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
