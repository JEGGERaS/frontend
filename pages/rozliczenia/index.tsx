import Layout from "@/components/common/Layout";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "constants/color-palette";
import Card from "../../components/common/Card";
import React from "react";
import DataGrid from "@/components/dataGrid/DataGrid";
import { MRT_ColumnDef } from "material-react-table";
import { mockRozliczeniaData } from "@/components/dataGrid/mockData";

interface RozliczeniaDataGrid {
  id: number;
  orderNumber: string;
  date: string;
  employee: string;
  invoiceNumber: string;
  invoicePrice: string;
  dealer: string;
  dealerEmployee: string;
  status: string;
}

function RozliczeniaPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getShadowColor = () => {
    return theme.palette.mode === "light" ? colors.black[300] : colors.white[500];
  };

  const getBgColor = () => {
    return theme.palette.mode === "light" ? colors.white[500] : colors.black[100];
  };

  const columnsDef: MRT_ColumnDef<RozliczeniaDataGrid>[] = [
    {
      accessorKey: "orderNumber",
      header: "Numer zlecenia",
      size: 150,
    },
    {
      accessorKey: "date",
      header: "Data",
      size: 150,
    },
    {
      accessorKey: "employee",
      header: "Handlowiec",
      size: 150,
    },
    {
      accessorKey: "invoiceNumber",
      header: "Numer faktury",
      size: 150,
    },
    {
      accessorKey: "invoicePrice",
      header: "Kwota faktury",
      size: 150,
    },
    {
      accessorKey: "dealer",
      header: "Dealer",
      size: 150,
    },
    {
      accessorKey: "dealerEmployee",
      header: "Handlowiec Dealera",
      size: 150,
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 150,
    },
  ];

  return (
    <Layout page="Rozliczenia">
      <Grid xs={12}>
        <Card bgcolor={getBgColor()} padding="0" shadowColor={getShadowColor()} shadow="0px 1px 5px -1px">
          <DataGrid columns={columnsDef} data={mockRozliczeniaData} />
        </Card>
      </Grid>
    </Layout>
  );
}

export default RozliczeniaPage;
