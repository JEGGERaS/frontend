import SideBar from "@/components/sideBar/SideBar";
import TopBar from "@/components/topBar/TopBar";
import { Box } from "@mui/material";

export default function Home() {
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
      <TopBar page={"Home"} />
    </Box>
  );
}
