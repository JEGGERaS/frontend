import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import SettingsModal from "../settings/SettingsModal";
import React from "react";

interface LayoutProps {
  page: string;
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleSettingsClick = () => {
    setOpen((prev) => !prev);
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
      <SettingsModal isOpen={open} onClose={handleSettingsClick} user="Costam" />
    </Box>
  );
};

export default Layout;
