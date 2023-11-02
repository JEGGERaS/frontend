import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Step,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  Typography,
  alpha,
  rgbToHex,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../constants/color-palette";
import HorizontalDivider from "../../common/HorizontalDivider";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PswrdChangeStep from "./PswrdChangeStepFirst";
import { green, lightGreen } from "@mui/material/colors";
import PswrdChangeStepFirst from "./PswrdChangeStepFirst";
import PswrdChangeStepSecond from "./PswrdChangeStepSecond";
import PswrdChangeStepThird from "./PswrdChangeStepThird";

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
  };

  return (
    <Modal
      open={props.isOpen}
      onClose={() => {
        props.onClose();
        hanldeReset();
      }}
      data-testid="settings-modal"
    >
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
        <Stepper
          activeStep={activeStep}
          sx={{
            margin: "1.5rem 0rem",
            "& .MuiStepLabel-root .Mui-completed": {
              color: activeStep === 2 ? green[700] : colors.secondary[500],
            },
            "& .MuiStepLabel-root .Mui-active": {
              color: activeStep === 2 ? green[700] : colors.secondary[500],
            },
            "& .Mui-disabled .MuiStepIcon-root": {
              color: alpha(colors.secondary[500], 0.2),
            },
            "& .Mui-disabled .MuiStepConnector-line":{
              borderColor: alpha(colors.secondary[500], 0.2),
            },
            "& .MuiStepIcon-text": {
              fill: colors.white[500],
              fontWeight: 600,
              fontSize: "1.2rem",
            },
            "& .MuiStepConnector-line": {
              borderColor: activeStep === 2 ? green[700] : colors.secondary[500],
              borderWidth: "0.1rem",
            },
          }}
        >
          <Step sx={{ marginRight: "-0.5rem", marginLeft: "1rem" }}>
            {activeStep > 0 ? (
              <StepLabel StepIconComponent={CheckCircleRoundedIcon} StepIconProps={{ sx: { fontSize: "2rem" } }} />
            ) : (
              <StepLabel />
            )}
          </Step>
          <Step sx={{ marginRight: "-0.5rem" }}>
            {activeStep > 1 ? (
              <StepLabel StepIconComponent={CheckCircleRoundedIcon} StepIconProps={{ sx: { fontSize: "2rem" } }} />
            ) : (
              <StepLabel />
            )}
          </Step>
          <Step sx={{ marginRight: "0.5rem" }}>
            {activeStep === 2 ? (
              <StepLabel StepIconComponent={CheckCircleRoundedIcon} StepIconProps={{ sx: { fontSize: "2rem" } }} />
            ) : (
              <StepLabel />
            )}
          </Step>
        </Stepper>
        {(() => {
          switch (activeStep) {
            case 0:
              return <PswrdChangeStepFirst />;
            case 1:
              return <PswrdChangeStepSecond />;
            case 2:
              return <PswrdChangeStepThird />;
            default:
              return <Typography>Coś poszło nie tak</Typography>;
          }
        })()}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <Button
            onClick={handleBack}
            disabled={activeStep === 0 ? true : false}
            sx={{
              backgroundColor: colors.secondary[500],
              color: colors.white[500],
              borderRadius: "0.7rem",
              padding: "0.3rem 1rem 0.3rem 0rem",
              "&.Mui-disabled": {
                backgroundColor: alpha(colors.secondary[500],0.3),
                color: colors.white[500],
              },
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? alpha(colors.secondary[300], 0.8)
                    : alpha(colors.secondary[700], 0.8),
              },
            }}
          >
            <NavigateBeforeRoundedIcon />
            <Typography variant="h4">Poprzedni</Typography>
          </Button>
          <Button onClick={handleNext} disabled={activeStep === 2 ? true : false} sx={{
              backgroundColor: colors.secondary[500],
              color: colors.white[500],
              borderRadius: "0.7rem",
              padding: "0.3rem 0rem 0.3rem 1rem",
              "&.Mui-disabled": {
                backgroundColor: alpha(colors.secondary[500],0.3),
                color: colors.white[500],
              },
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? alpha(colors.secondary[300], 0.8)
                    : alpha(colors.secondary[700], 0.8),
              },
            }}>
            <Typography variant="h4">Następny</Typography>
            <NavigateNextRoundedIcon />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChangePasswordModal;
