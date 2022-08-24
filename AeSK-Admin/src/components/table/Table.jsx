import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      customer: "John Smith",
      date: "1 March",
      type:"Engineering council",
      status: "Approved",
    },
    {
      id: 2235235,
      customer: "Michael Doe",
      date: "1 March",
      type:"Engineering council",
      status: "Pending",
    },
    {
      id: 2342353,
      customer: "Bill Smith",
      date: "1 March",
      type:"Engineering council",
      status: "Pending",
    },
    {
      id: 2357741,
      customer: "Jane Smith",
      date: "1 March",
      type:"Society Membership",
      status: "Approved",
    },
     
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Membership ID</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Membership Type</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.type}</TableCell>
               
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
