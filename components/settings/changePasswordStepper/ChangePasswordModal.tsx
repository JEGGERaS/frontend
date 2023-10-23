import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Box, Button, IconButton, Modal, Step, StepContent, StepLabel, Stepper, Typography, alpha, useTheme } from "@mui/material";
import { tokens } from "../../../constants/color-palette";
import HorizontalDivider from "../../common/HorizontalDivider";
import CustomTextField from ".././CustomTextField";
import React from "react";
import CustomInputField from "../CustomInputField";
import PswrdChangeStep1 from "./PswrdChangeStep";
import PswrdChangeStep from "./PswrdChangeStep";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal = (props: ChangePasswordModalProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const hanldeReset = () => {
    setActiveStep(0);
  }


  return (
    <Modal open={props.isOpen} onClose={() => {
        props.onClose();
        hanldeReset();
      }} data-testid="settings-modal">
        <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "33rem",
          height: "40rem",
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
            margin: "1rem 0rem 0.5rem 1rem",
          }}
        >
          <Typography variant="h3" sx={{ marginLeft: "1rem", fontWeight: 600 }}>
            Zmiana hasła
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
        <Stepper activeStep={activeStep} sx={{
            margin:"1.5rem 0rem",
            '& .MuiStepLabel-root .Mui-completed': {
              color: colors.secondary[500]
            },
            '& .MuiStepLabel-root .Mui-active':{
              color: colors.secondary[500],
            },
            "& .Mui-disabled .MuiStepIcon-root":{
              color: alpha(colors.secondary[500],0.2)
            },
            '& .MuiStepIcon-text':{
              fill: colors.white[500],
              fontWeight: 600,
              fontSize: "1.2rem"
            }
        }}>
            <Step sx={{marginRight: "-0.5rem", marginLeft:"1rem"}}>
                <StepLabel/>
            </Step>
            <Step sx={{marginRight: "-0.5rem"}}>
                <StepLabel />
            </Step>
            <Step sx={{marginRight: "0.5rem"}}>
                <StepLabel />   
            </Step>
        </Stepper>
          <PswrdChangeStep step={activeStep} margin="0rem 0rem 3rem 0rem"/>
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
        }}>
            <Button onClick={handleBack} disabled={activeStep === 0 ? true : false}>Poprzedni</Button>
            <Button onClick={handleNext} disabled={activeStep === 2 ? true : false}>Nastepny</Button>
        </Box>
        </Box>
    </Modal>
  )
}

export default ChangePasswordModal;