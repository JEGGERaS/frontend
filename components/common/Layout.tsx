import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import SettingsModal from "../settings/SettingsModal";
import React from "react";
import ChangePasswordModal from "../settings/changePasswordStepper/ChangePasswordModal";

interface LayoutProps {
  page: string;
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [isChangePasswordModal, setIsChangePasswordModal] = React.useState<boolean>(false);

  const handleShowPasswordClick = () => {
    setOpen((prev) => !prev);
    setIsChangePasswordModal(true);
  };

  const handleSettingsClick = () => {
    setOpen((prev) => !prev);
    isChangePasswordModal && setIsChangePasswordModal(false);
  };

  return (
    <Box width="100vw" height="100vh" display="flex" overflow="hidden" position="fixed">
      <SideBar />
      <Box width="100%" display="flex" flexDirection="column">
        <TopBar page={props.page} handleSettingsClick={handleSettingsClick} />
        <Box width="100%" padding="2rem 1.5rem">
          <Grid container spacing={3}>
            {props.children}
          </Grid>
        </Box>
      </Box>
      <SettingsModal isOpen={open} onClose={handleSettingsClick} handleShowPassword={handleShowPasswordClick} user="Costam" />
      <ChangePasswordModal isOpen={isChangePasswordModal} onClose={handleSettingsClick}/>
    </Box>
  );
};

export default Layout;
