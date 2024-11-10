import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  Badge,
  AvatarGroup,
} from "@mui/material";
import { styled } from "@mui/system";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const PriorityLabel = styled("span")(({ theme, priority }) => ({
  color:
    priority === "High"
      ? "#FF6347"
      : priority === "Medium"
      ? "#FFA500"
      : "#2ECC71",

  backgroundColor:
    priority === "High"
      ? "#FFE6E1"
      : priority === "Medium"
      ? "#FFF4CC"
      : "#E0FFE1",
  borderRadius: "8px",
  padding: "4px 8px",
  fontSize: "12px",
  fontWeight: "bold",
}));

const TaskCard = ({ task }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2, borderRadius: "12px", boxShadow: 2 }}>
      <CardContent>
        {/* Priority Label */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <PriorityLabel priority={task.priority}>
            {task.priority}
          </PriorityLabel>
        </Box>

        {/* Task Title and Description */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {task.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {task.description}
        </Typography>
        <Box display="flex">
          {/* User Avatars */}
          <Box display="flex" alignItems="center" mt={1} mb={1}>
            <AvatarGroup max={3}>
              {/* Hardcoded assignees */}
              <Avatar
                alt="John Doe"
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Jane Smith"
                src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Alex Johnson"
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                sx={{ width: 24, height: 24 }}
              />
            </AvatarGroup>
          </Box>

          {/* Comments and Files Icons */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginLeft="auto"
          >
            <Box display="flex" alignItems="center" gap="15px">
              <Badge
                badgeContent={task.comments}
                color="primary"
                sx={{ mr: 1 }}
              >
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
              <Badge badgeContent={task.files} color="primary">
                <AttachFileIcon fontSize="small" />
              </Badge>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
