export const productDefinition = [
    {
        field: "sku",
        headerName: "SKU",
        filterable: true,
        type: "string"    
    },
    {
        field: "product_name",
        headerName: "Product Name",
        filterable: true,
        type: "string"
    },
    {
        field: "manufacturer",
        headerName: "Manufacturer",
        filterable: true,
        type: "string"
    },
    {
	    field: "active",
        headerName: "Active",
        filterable: false,
		type: "boolean"
    }
];
