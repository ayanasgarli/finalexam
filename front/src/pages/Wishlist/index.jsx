import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { WishlistItemContext } from "../../services/context/wishlistItemContextProvider";
import { Helmet } from "react-helmet";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Wishlist = () => {
  const { wishlistItem, deleteItem } = useContext(WishlistItemContext);

  const handleDelete = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your wishlist.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(data);
        Swal.fire("Deleted!", "Your item has been removed.", "success");
      }
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3745/3745363.png"
        />
      </Helmet>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "50px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Wishlist</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlistItem &&
              wishlistItem.map((data) => (
                <TableRow
                  key={data._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {data?.name}
                  </TableCell>
                  <TableCell align="center">{data?.description}</TableCell>
                  <TableCell align="center">{data?.price}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handleDelete(data)}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
};

export default Wishlist;

