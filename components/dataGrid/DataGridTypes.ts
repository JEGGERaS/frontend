import { MRT_ColumnDef, MRT_RowData } from "material-react-table";

export interface DataGridProps<T extends MRT_RowData> {
    columns: MRT_ColumnDef<T>[];
    data: T[];
}