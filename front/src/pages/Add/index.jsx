import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import "./index.scss";
import { postData } from "../../services/api/httprequest";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import AddTable from "../../components/Table";


const validationSchema = yup.object({
  name: yup.string("Enter your name").required("name is required"),
  price: yup.string("Enter your price").required("price is required"),
  description: yup.string("Enter your description").required("description is required"),
  
});

const Add = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        await postData(values);
        actions.resetForm();

        Swal.fire({
          icon: "success",
          title: "Successfully Added!",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error("Error", error);
      }
    },
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png"
        />
      </Helmet>
      <div className="add">
        <h2>Add New Meals</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="*Name"
            style={{ margin: "10px" }}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="price"
            name="price"
            label="*Price"
            style={{ margin: "10px" }}
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="*Description "
            style={{ margin: "10px" }}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
          <Button
            style={{ margin: "10px" }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>

      <AddTable />
    </>
  );
};

export default Add 