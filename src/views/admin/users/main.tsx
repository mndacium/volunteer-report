import * as React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { ManageUserCard } from "./ui";

export const ManageUsersPageView = () => {
  const [isOrderDropdownOpened, setIsOrderDropdownOpened] =
    React.useState(false);

  const [users, setUsers] = React.useState(
    Array(5)
      .fill({})
      .map((_val, index) => ({
        id: index + 1,
        name: `User name ${index + 1}`,
        description:
          "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        totalReportsNumber: 2,
        totalAmountOfMoney: 5725,
      }))
  );

  const toggleOrderDropdownOpen = React.useCallback(
    () => setIsOrderDropdownOpened(!isOrderDropdownOpened),
    [isOrderDropdownOpened]
  );

  return (
    <Container
      maxWidth={false}
      sx={{ marginTop: "7rem", minHeight: "calc(100vh - 7rem)" }}
    >
      <Stack flexDirection="row" justifyContent="space-between" mb={6}>
        <Button
          startIcon={<FilterAltOutlinedIcon />}
          endIcon={
            isOrderDropdownOpened ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
          onClick={toggleOrderDropdownOpen}
          color="secondary"
          sx={{ textTransform: "none", fontWeight: "400" }}
        >
          Order by
        </Button>
        <Typography
          variant="h4"
          fontWeight="700"
          textTransform="uppercase"
          textAlign="center"
          color="text.primary"
        >
          USER MANAGEMENT
        </Typography>
        <div style={{ width: "100px" }} />
      </Stack>
      {users.length === 0 ? (
        <Typography
          variant="h4"
          fontWeight="600"
          fontSize="1.25rem"
          textAlign="center"
          color="text.primary"
        >
          No users
        </Typography>
      ) : (
        <Stack gap={4}>
          {users.map((user) => (
            <ManageUserCard
              key={user.id}
              user={user}
              users={users}
              setUsers={setUsers}
            />
          ))}
        </Stack>
      )}
    </Container>
  );
};
