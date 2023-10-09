import SettingsModal from "@/components/settings/SettingsModal";
import SideBar from "@/components/sideBar/SideBar";
import TopBar from "@/components/topBar/TopBar";
import { Box } from "@mui/material";
import React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleSettingsClick = () => {
    setOpen(!open);
  }


  return (
    <Box sx={
      {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "fixed"
      }
    }>
      <SideBar />
      <TopBar page={"Home"} handleSettingsClick={handleSettingsClick}/>
      <SettingsModal isOpen={open} onClose={handleSettingsClick} user="Costam"/>
    </Box>
  );
}
