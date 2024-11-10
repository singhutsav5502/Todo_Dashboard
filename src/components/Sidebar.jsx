import {
  Group,
  Home,
  Message,
  MoreHoriz,
  Settings,
  List as ListIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Sidebar = () => {
  const projectColors = {
    "Mobile App": "#5D9C59", // Green
    "Website Redesign": "#FFA500", // Orange
    "Design System": "#FFC0CB", // Light Pink
    Wireframes: "#5D9C59", // Green
  };

  return (
    <Box
      sx={{
        width: '15vw',
        // padding:'0px 5px 0px 5px',
        borderRight: "1px solid #e0e0e0",
        height: "100vh",
        position: "fixed",
        zIndex: "100",
      }}
    >
      <Typography variant="h6" sx={{ padding: "20.5px" }} gutterBottom>
        Project M.
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Message />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Members" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ mt: 2}}>
        <Typography variant="body2" sx={{ mb: 1, padding: "20px" }}>
          MY PROJECTS
        </Typography>
        {["Mobile App", "Website Redesign", "Design System", "Wireframes"].map(
          (project) => (
            <ListItem
              button
              key={project}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                mb: 1,
                "&:hover": {
                  bgcolor: "#f3e8ff", // Light purple on hover
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  width: "8px",
                  height: "8px",
                  bgcolor: projectColors[project],
                  borderRadius: "50%",
                  marginRight: "8px",
                  marginLeft: "4px",
                }}
              />
              <ListItemText primary={project} />
              <IconButton>
                <MoreHoriz fontSize="small" />
              </IconButton>
            </ListItem>
          )
        )}
      </Box>
      <Box sx={{ bgcolor: "#e0e0e0", p: 2, borderRadius: 2, margin: 5 }}>
        <Typography variant="body2" fontWeight="bold">
          Thoughts Time
        </Typography>
        <Typography variant="caption">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 1, fontSize:'0.8rem'}}>
          Write a message
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
