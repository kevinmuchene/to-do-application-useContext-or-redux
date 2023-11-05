import { Card, TextField, Typography, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container, Grid, CardHeader } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import { getCurrentDateFormatted } from "../common/GetDate";

export default function AddToDo() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      dateCreated: getCurrentDateFormatted(),
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <Container sx={{ marginTop: "2em" }}>
      <Card sx={{ minWidth: 300, backgroundColor: "#80b8f0" }}>
        <CardHeader
          title={
            <Typography variant="h5" color={"purple"}>
              Add It! Get It Done!
            </Typography>
          }
          subheader={
            <Typography color={"purple"}>Don't Procastinate</Typography>
          }
        ></CardHeader>
        <CardContent>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sm={12} md={12}>
                <TextField
                  id="title"
                  label="Title"
                  name="title"
                  variant="outlined"
                  fullWidth
                  required
                  color="error"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item sm={12} md={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  minRows={3}
                  maxRows={6}
                  color="error"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item sm={12} md={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  Add Post
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
