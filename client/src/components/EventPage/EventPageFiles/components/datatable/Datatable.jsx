// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";

// import { Link } from "react-router-dom";
// import React,{ useState } from "react";
// import CRUDTable, {
//   Fields,
//   Field,
//   CreateForm,
//   UpdateForm,
//   DeleteForm
// } from "react-crud-table";



// const Datatable = () => {
  
//   const [open, setOpen] = React.useState(false);
// 	const [isEdit, setEdit] = React.useState(false);
//   const [disable, setDisable] = React.useState(true);
// 	const [showConfirm, setShowConfirm] = React.useState(false);

  
  
//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               // onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//             <div
//               className="editButton"
//               // onClick={() => handleDelete(params.row.id)}
//             >
//               Edit
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         ITEMS LIST
//         <Link to={"/users/new"}><button className="link">Add New Item</button></Link>
        
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//       <div><CRUDTable/></div>
//     </div>
//   );
// };

// export default Datatable;
