import React, { useState } from "react";
import { addTask, moveTask, setFilter } from "../redux/tasksSlice";
import Sidebar from "./Sidebar";
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Topbar from "./Topbar";
import TaskCard from "./TaskCard";
import { useSelector, useDispatch } from "react-redux";
import AddTaskModal from "./AddTaskModal";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Low",
  });
  const [selectedStatus, setSelectedStatus] = useState("todo");

  const handleAddTaskClick = (status) => {
    setSelectedStatus(status);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setNewTask({ title: "", description: "", priority: "Low" });
  };

  const handleSaveTask = () => {
    const task = {
      id: Date.now(),
      name: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      comments: 0,
      files: 0,
    };
    dispatch(addTask({ status: selectedStatus, task }));
    handleCloseModal();
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredTasks = (status) => {
    if (filter === "All") return tasks[status];
    return tasks[status].filter((task) => task.priority === filter);
  };

  const columnNames = {
    todo: "To Do",
    inProgress: "In Progress",
    done: "Done",
  };
  const columnStyles = {
    todo: { borderBottom: "4px solid purple" },
    inProgress: { borderBottom: "4px solid orange" },
    done: { borderBottom: "4px solid green" },
  };
  const dotStyles = {
    todo: { backgroundColor: "purple" },
    inProgress: { backgroundColor: "orange" },
    done: { backgroundColor: "green" },
  };
  const moveTaskLeft = (task, currentStatus) => {
    const columns = Object.keys(columnNames);
    const currentIndex = columns.indexOf(currentStatus);
    if (currentIndex > 0) {
      const newStatus = columns[currentIndex - 1];
      dispatch(
        moveTask({ taskId: task.id, from: currentStatus, to: newStatus })
      );
    }
  };

  const moveTaskRight = (task, currentStatus) => {
    const columns = Object.keys(columnNames);
    const currentIndex = columns.indexOf(currentStatus);
    if (currentIndex < columns.length - 1) {
      const newStatus = columns[currentIndex + 1];
      dispatch(
        moveTask({ taskId: task.id, from: currentStatus, to: newStatus })
      );
    }
  };

  return (
    <>
      <Sidebar />
      <Box sx={{ width: "90vw" }}>
        <Topbar />
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1, p: 3, marginLeft: "20vw" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">Mobile App</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
                  <Select
                    value={filter || "All"}
                    onChange={handleFilterChange}
                    displayEmpty
                    sx={{
                      fontSize: "1rem",
                      padding: "0px",
                      minHeight: "unset",
                      height: "40px",
                    }}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="outlined" sx={{ mr: 1 }}>
                  Invite
                </Button>
              </Box>
            </Box>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              {Object.keys(tasks).map((status) => (
                <Grid item xs={4} key={status}>
                  <Box
                    sx={{
                      bgcolor: "#f9f9f9",
                      p: 2,
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          ...dotStyles[status],
                          width: "10px",
                          height: "10px",
                          marginRight: "10px",
                          borderRadius: "100%",
                        }}
                      ></Box>
                      <Typography variant="h5" sx={{ flexGrow: 1 }}>
                        {columnNames[status]}
                      </Typography>
                      {status === "todo" && (
                        <Button
                          onClick={() => handleAddTaskClick(status)}
                          sx={{
                            fontSize: "0.8rem",
                            padding: "4px 8px",
                            height: "25px",
                            width: "25px",
                            minWidth: "0px",
                            backgroundColor: "#CBC3E3",
                            color: "purple",
                          }}
                        >
                          +
                        </Button>
                      )}
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        ...columnStyles[status],
                        marginBottom: "30px",
                      }}
                    ></Box>
                    {filteredTasks(status).map((task) => (
                      <Box key={task.id} sx={{ position: "relative" }}>
                        <TaskCard task={task} />
                        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                          <IconButton
                            disabled={status === "todo"}
                            onClick={() => moveTaskLeft(task, status)}
                          >
                            <ArrowBack />
                          </IconButton>
                          <IconButton
                            disabled={status === "done"}
                            onClick={() => moveTaskRight(task, status)}
                          >
                            <ArrowForward />
                          </IconButton>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Modal for adding new task */}
            <AddTaskModal
              open={open}
              onClose={handleCloseModal}
              onSave={handleSaveTask}
              taskDetails={newTask}
              setTaskDetails={setNewTask}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
