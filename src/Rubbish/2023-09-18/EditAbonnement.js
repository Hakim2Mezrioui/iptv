import React from "react";
import DataTable from "react-data-table-component";
import IptvContext from "../../context/Iptv";
import EditForm from "./EditForm/EditForm";

const EditAbonnement = () => {
    const columns = [
        {
            name: 'Name',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Duration',
            selector: row => row.duration,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {   
            name: "edit",
            cell: (row) => (
                <button className="btn btn-warning" onClick={() => onEdit(row)} >Edit</button>
            ),
            button: true,
            allowOverflow: true,
        }
    ];
    
    const data = [
        {
            id: 1,
            title: 'IPTV',
            duration: '3 MOIS',
            price: "33dh"
        },
        {
            id: 2,
            title: 'IPTV',
            duration: "3 MOIS",
            price: '33dh',
        },
        {
            id: 3,
            title: 'IPTV',
            duration: "3 MOIS",
            price: '33dh',
        },
    ]

    // let ctx = useContext(IptvContext);

    

    const onEdit = (dataRow) => {

        console.log(dataRow);
    }
    return (
        <div>
            <EditForm />
            <DataTable 
                columns={columns}
                data={data}
                className="container"
            />
        </div>
    );
}

export default EditAbonnement;