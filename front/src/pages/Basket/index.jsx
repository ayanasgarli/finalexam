import React, { useContext } from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BasketItemContext } from "../../services/context/basketItemContextProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Basket = () => {
  const { basketItem, removeItem, handleIncrease, handleDecrease } =
    useContext(BasketItemContext);

  const handleDelete = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(data);
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Basket</title>
    <link
      rel="icon"
      href="https://cdn-icons-png.flaticon.com/512/3721/3721818.png"
    />
  </Helmet>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "50px 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Basket</h2>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Total Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Increase</TableCell>
                <TableCell align="center">Decrease</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basketItem &&
                basketItem.map((data) => (
                  <TableRow
                    key={data._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {data?.name}
                    </TableCell>
                    <TableCell align="center">{data?.totalPrice}</TableCell>
                    <TableCell align="center">{data?.quantity}</TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => handleIncrease(data)}
                        variant="contained"
                      >
                        +
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => handleDecrease(data)}
                        variant="contained"
                        disabled={data?.quantity === 1}
                      >
                        -
                      </Button>
                    </TableCell>
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

export default Basket;