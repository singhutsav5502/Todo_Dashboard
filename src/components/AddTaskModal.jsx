import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const AddTaskModal = ({
  open,
  onClose,
  onSave,
  taskDetails,
  setTaskDetails,
}) => {
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const handleChange = (field, value) => {
    setTaskDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" })); // Reset error on change
  };

  const handleSave = () => {
    // Validation: check if fields are empty
    const newErrors = {};
    if (!taskDetails.title) {
      newErrors.title = "Title is required";
    }
    if (!taskDetails.description) {
      newErrors.description = "Description is required";
    }
    if (!taskDetails.priority) {
      newErrors.priority = "Priority is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSave();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={taskDetails.title}
          onChange={(e) => handleChange("title", e.target.value)}
          required
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          multiline
          rows={3}
          value={taskDetails.description}
          onChange={(e) => handleChange("description", e.target.value)}
          required
          error={!!errors.description}
          helperText={errors.description}
        />
        <FormControl fullWidth sx={{ mt: 2 }} error={!!errors.priority}>
          <InputLabel>Priority</InputLabel>
          <Select
            value={taskDetails.priority}
            onChange={(e) => handleChange("priority", e.target.value)}
            label="Priority"
          >
            {["Low", "Medium", "High", "Completed"].map((priority) => (
              <MenuItem key={priority} value={priority}>
                {priority}
              </MenuItem>
            ))}
          </Select>
          {errors.priority && <FormHelperText>{errors.priority}</FormHelperText>}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary" type="submit">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
