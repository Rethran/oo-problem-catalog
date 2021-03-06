export interface TableColumnConfig<TData> {
    headerHtml: string;
    resolveHtml: (rowData: TData) => JQuery;
}