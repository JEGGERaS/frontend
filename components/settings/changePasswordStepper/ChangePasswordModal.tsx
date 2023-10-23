import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Box, Button, IconButton, Modal, Typography, alpha, useTheme } from "@mui/material";
import { tokens } from "../../../constants/color-palette";
import HorizontalDivider from "../../common/HorizontalDivider";
import CustomTextField from ".././CustomTextField";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal = (props: ChangePasswordModalProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Modal open={props.isOpen} onClose={props.onClose} data-testid="settings-modal">
        <Box></Box>
    </Modal>
  )
}

export default ChangePasswordModal;