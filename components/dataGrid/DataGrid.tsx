import { useTheme } from "@emotion/react";
import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
import { MRT_ColumnDef, MRT_RowData, MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_PL } from "material-react-table/locales/pl";
import React from "react";
import { DataGridProps } from "./DataGridTypes";
import DataGridSpeedDial from "./DataGridSpeedDial";

function DataGrid<T extends MRT_RowData>(props: DataGridProps<T>) {
  const globalTheme = useTheme();

  const COLUMNS = React.useMemo<MRT_ColumnDef<T>[]>(() => props.columns, []);

  const tableTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: globalTheme.palette.mode,
          primary: globalTheme.palette.primary,
          secondary: globalTheme.palette.secondary,
          text: {
            primary: globalTheme.palette.text.secondary,
            secondary: globalTheme.palette.text.secondary,
          },
        },
      }),
    [globalTheme]
  );

  const table = useMaterialReactTable({
    columns: COLUMNS,
    data: props.data,
    localization: MRT_Localization_PL,
    initialState: { columnVisibility: { id: false }, showGlobalFilter: true, isLoading: false },
    enableStickyHeader: true,
    enableFullScreenToggle: true,
    enableColumnActions: false,
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "0.8rem",
      },
    },
    muiTopToolbarProps: {
      sx: (theme) => ({
        bgcolor: theme.palette.mode === "light" ? "#F9F9F9" : "#282828",
        padding: "0.5rem 0",
      }),
    },
    muiTableHeadCellProps: {
      sx: (theme) => ({
        bgcolor: theme.palette.mode === "light" ? "#F9F9F9" : "#272727",
      }),
    },
    muiTableContainerProps: {
      sx: {
        maxHeight: "50rem",
        scrollbarWidth: '5rem',
      },
    },
    muiSearchTextFieldProps: {
      variant: "standard",
      sx: {
        width: "30rem",
      },
    },
    renderTopToolbarCustomActions: () => (
      <Box sx={{ display: "flex", padding: "0.2rem" }}>
        <DataGridSpeedDial />
      </Box>
    ),
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.mode === "dark" ? "#3A3A3A" : "#FFFFF",
    }),
    muiSkeletonProps: {
      animation: "wave",
    },
    muiLinearProgressProps: {
      color: "secondary",
    },
    muiCircularProgressProps: {
      color: "primary",
    },
  });

  return (
    <ThemeProvider theme={tableTheme}>
      <MaterialReactTable table={table} />
    </ThemeProvider>
  );
}

export default DataGrid;
