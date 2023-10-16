import { Box } from "@mui/material";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import Card from "./Card";

interface LayoutProps {
  page: string;
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      overflow="hidden"
      position="fixed"
    >
      <SideBar />
      <Box width="100%" display="flex" flexDirection="column">
        <TopBar page={props.page} />
        <Box width="100%" padding="2rem 1.5rem">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
