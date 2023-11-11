import {
  AssignmentTurnedInRounded,
  CheckRounded,
  HighlightOffRounded,
  NavigateBeforeRounded,
  NavigateNextRounded,
  CloseRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  Typography,
  alpha,
  stepConnectorClasses,
  styled,
  useTheme,
} from "@mui/material";
import { dummyPostRequest } from "../../../constants/dummyRequests";
import React from "react";
import { tokens } from "../../../constants/color-palette";
import HorizontalDivider from "../../common/HorizontalDivider";
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
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [requestStatus, setRequestStatus] = React.useState<string | null>(null);
  const steps = ["Wprowadź hasło", "Wprowadź kod", "Hasło zmienione"];
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);

  const StyledConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 1rem)",
      right: "calc(50% + 1rem)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor:
          activeStep === 2
            ? requestStatus === "failed"
              ? theme.palette.error.main
              : theme.palette.success.main
            : theme.palette.secondary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor:
          activeStep === 2
            ? requestStatus === "failed"
              ? theme.palette.error.main
              : theme.palette.success.main
            : theme.palette.secondary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const StyledStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color:
        activeStep === 2
          ? requestStatus === "failed"
            ? theme.palette.error.main
            : theme.palette.success.main
          : theme.palette.secondary.main,
    }),
    "& .QontoStepIcon-completedIcon": {
      color:
        activeStep === 2
          ? requestStatus === "failed"
            ? theme.palette.error.main
            : theme.palette.success.main
          : theme.palette.secondary.main,
      zIndex: 1,
      fontSize: "1.5rem",
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  }));

  const StyledStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;

    return (
      <StyledStepIconRoot ownerState={{ active }} className={className}>
        {completed || activeStep === 2 ? (
         requestStatus === "failed" ? (
            <CloseRounded className="QontoStepIcon-completedIcon" />
          ) : (
            <CheckRounded className="QontoStepIcon-completedIcon" />
         )
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </StyledStepIconRoot>
    );
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setRequestStatus(null);
  };

  const handleRequestStatusChange = () => {
    setRequestStatus(null);
  };

  const renderStep = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return <PswrdChangeStepFirst />;
      case 1:
        return <PswrdChangeStepSecond requestStatus={requestStatus} onInputChange={handleRequestStatusChange} />;
      case 2:
        return <PswrdChangeStepThird requestStatus={requestStatus}/>;
      default:
        return <Typography>Coś poszło nie tak</Typography>;
    }
  };

  const handleCodeSubmit = async () => {
    const response = await dummyPostRequest();
    setRequestStatus(response.status);
    return response.status;
  };

  const handleNextButtonClick = async () => {
    if (isProcessing) return;
    switch (activeStep) {
      case 1:
        setIsProcessing(true);
        const status = await handleCodeSubmit();
        if(status !== "wrong-code"){
          handleNext();
        }
        break;
      case 2:
        props.onClose();
        handleReset();
        break;
      default:
        handleNext();
        break;
    }
    setIsProcessing(false);
  };

  const handleModalClose = () => {
    props.onClose();
    handleReset();
  };

  return (
    <Modal open={props.isOpen} data-testid="change-password-modal" onClose={handleModalClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "33rem",
          height: "34rem",
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
            data-testid="close-changePswrd-modal-button"
            sx={{ marginRight: "1rem", color: theme.palette.mode === "light" ? colors.black[500] : colors.white[500] }}
          >
            <HighlightOffRounded />
          </IconButton>
        </Box>
        <HorizontalDivider
          bgColor={theme.palette.mode === "light" ? alpha(colors.black[500], 0.2) : alpha(colors.white[500], 0.2)}
          variant={"middle"}
        />
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<StyledConnector />}
          sx={{
            margin: "2rem 0",
            "& .MuiStepLabel-label": {
              fontSize: "1rem",
              display: "inline",
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StyledStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStep(activeStep)}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0rem 1rem 0rem 1rem",
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
                backgroundColor: alpha(colors.secondary[500], 0.3),
                color: colors.white[500],
              },
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light" ? alpha(colors.secondary[600], 1) : alpha(colors.secondary[600], 0.8),
              },
            }}
          >
            <NavigateBeforeRounded />
            <Typography variant="h4">Poprzedni</Typography>
          </Button>
          <Button
            onClick={handleNextButtonClick}
            disabled={isProcessing ? true : false}
            sx={{
              backgroundColor: colors.secondary[500],
              color: colors.white[500],
              borderRadius: "0.7rem",
              padding: "0.3rem 0rem 0.3rem 1rem",
              "&.Mui-disabled": {
                backgroundColor: alpha(colors.secondary[500], 0.3),
                color: colors.white[500],
              },
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light" ? alpha(colors.secondary[600], 1) : alpha(colors.secondary[600], 0.8),
              },
            }}
          >
            {activeStep === 2 ? (
              <>
                <Typography variant="h4" sx={{ marginRight: "0.7rem" }}>
                  Zakończ
                </Typography>
                <AssignmentTurnedInRounded sx={{ marginRight: "0.5rem" }} />
              </>
            ) : (
              <>
                <Typography variant="h4">Następny</Typography>
                <NavigateNextRounded />
              </>
            )}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChangePasswordModal;
