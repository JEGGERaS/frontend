import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const actions = [{ icon: <SaveIcon />, name: "Dodaj rozliczenie" }];

const DataGridSpeedDial = () => {
  return (
    <Box sx={{ height: "10%", transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        direction="right"
        sx={{ "& .MuiSpeedDial-fab": { width: "3.5rem", height: "3.5rem" } }}
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default DataGridSpeedDial;
