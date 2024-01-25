import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  getAll,
  getById,
  postData,
  deleteById,
} from "../../services/api/httprequest";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";

export default function AddTable() {
  const [meals, setMeals] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const allMeals = await getAll();
      setMeals(allMeals);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const deletedMeal = await deleteById(id);
      const updatedMeals = meals.filter((meal) => meal._id !== id);
      setMeals(updatedMeals);

      Swal.fire("Deleted!", "The meal has been deleted.", "success");
    }
  };

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1250px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Data Table for meals</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {meals &&
                meals.map((meal) => (
                <TableRow
                  key={meals.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{meal.name}</TableCell>
                  <TableCell align="center">{meal.description}</TableCell>
                  <TableCell align="center">${meal.price}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDelete(meal._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

