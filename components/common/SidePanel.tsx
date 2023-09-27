import { Box, Paper, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import style from "./SidePanel.module.css";

const SidePanel = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "20rem",
        height: "100vh",
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "8.75rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "8.75rem",
            borderBottom: "3px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className={style.logo}>JEGGER</span>
        </Box>
      </Box>
      <Box
        width="100%"
        bgcolor="aqua"
        marginTop="5rem"
        display="flex"
        flexDirection="column"
      >
        <Box
          sx={{
            width: "90%",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              borderLeft: "3px solid blue",
            },
          }}
        >
          <Box sx={{ marginLeft: "2.625rem", display: 'flex', alignItems: 'center' }}>
            <HomeRoundedIcon />
          </Box>
          <Box sx={{ marginLeft: "2.375rem", display: 'flex', alignItems: 'center'  }}>
            <Typography fontWeight="bold" fontSize="24px" >HOME</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default SidePanel;
