import { CalendarToday, Chat, Notifications } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

const Topbar = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 20px",
      bgcolor: "#ffffff",
      borderBottom: "1px solid #e0e0e0",
      width: "85vw",
      marginLeft: "15vw",
      top: 0,
      zIndex: 1,
    }}
  >
    <TextField
      variant="outlined"
      placeholder="Search for anything..."
      size="small"
      sx={{ width: "20vw" }}
    />

    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{mr:5}}>
        <IconButton>
          <CalendarToday />
        </IconButton>
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          mr: 1,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Utsav
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Delhi, India
        </Typography>
      </Box>
      <Tooltip title="Utsav">
        <Avatar
          sx={{ marginLeft: "10px" }}
          alt="Utsav"
          src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
        />
      </Tooltip>
    </Box>
  </Box>
);
export default Topbar;
