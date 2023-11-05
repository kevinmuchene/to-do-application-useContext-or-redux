import { Box, Button, Container, Typography, Alert } from "@mui/material";
import Paper from "@mui/material/Paper";
import ToDoItem from "./ToDoItem";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function ToDoListWrapper() {
  const { listOfTodos } = useContext(TodoContext);
  // console.log(listOfTodos);

  return (
    <Container sx={{ marginTop: "2em" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
          margin: "1em",
        }}
      >
        <div>
          <Typography component={"span"}>
            <DoneAllIcon sx={{ color: "purple" }} />
          </Typography>
          <Typography
            color="purple"
            align="center"
            variant="h5"
            component={"span"}
          >
            Get-It-Done
          </Typography>
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            maxHeight: "80vh",
            overflow: "auto",
            backgroundColor: "#ACE1AF",
          },
        }}
      >
        <Paper elevation={5}>
          <Container sx={{ marginTop: "2em", marginBottom: "2em" }}>
            <Link to="/add_to_do">
              <Button
                variant="outlined"
                color="warning"
                sx={{ marginBottom: "1em" }}
              >
                Add To Do
              </Button>
            </Link>
            {listOfTodos.length !== 0 ? (
              listOfTodos.map((todo, index) => (
                <ToDoItem key={index} todo={todo} />
              ))
            ) : (
              <Alert variant="filled" severity="warning">
                You don't have any to dos, add them to get them done!!
              </Alert>
            )}
          </Container>
        </Paper>
      </Box>
    </Container>
  );
}
