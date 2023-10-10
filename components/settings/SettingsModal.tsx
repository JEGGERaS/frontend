import React from "react";
import { tokens } from "../../constants/color-palette";
import { Box, Button, IconButton, Modal, TextField, Typography, alpha, useTheme } from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import HorizontalDivider from "../common/HorizontalDivider";
import CustomTextField from "./CustomTextField";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: string;
}

const SettingsModal = (props: SettingsModalProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Modal open={props.isOpen} onClose={props.onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "33rem",
          //height: "36rem",
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
          <Typography variant="h3" sx={{ marginLeft: "1rem" }}>
            {" "}
            Ustawienia{" "}
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
            margin:"1.5rem 0 1.5rem 0"
          }}
        >
            <CustomTextField value={"Filip"} label={"imie"}/>
            <CustomTextField value={"Majewski"} label={"nazwisko"}/>
            <CustomTextField value={"Developer"} label={"stanowisko"}/>
            <CustomTextField value={"costam@gmail.com"} label={"email"}/>
        </Box>
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>
        <Button sx={{
            backgroundColor:colors.secondary[500],
            width:"90%",
            borderRadius:"0.5rem",
            marginTop:"2rem",
            marginBottom:"2rem",
            paddingTop:"0.75rem",
            paddingBottom:"0.75rem",
            color: colors.white[500],
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "light" ? alpha(colors.secondary[300], 0.8) : alpha(colors.secondary[700], 0.8),
            },
        }}>
            <Typography variant="h3" sx={{fontWeight:"600"}}>zmiana hasła</Typography>
        </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SettingsModal;