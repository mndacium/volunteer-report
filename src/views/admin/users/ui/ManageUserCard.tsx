import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { WrapperStack, ContentStack } from "./styled";
import { StyledButton } from "../../common";
import { toast } from "react-toastify";

interface User {
  id: number;
  name: string;
  description: string;
  totalReportsNumber: number;
  totalAmountOfMoney: number;
}

interface Props {
  user: User;
  users: User[];
  setUsers: (users: User[]) => void;
}

export const ManageUserCard = ({
  user: { id, name, description, totalAmountOfMoney, totalReportsNumber },
  users,
  setUsers,
}: Props) => {
  return (
    <WrapperStack gap={3} padding={2}>
      <Typography color="text.secondary" fontWeight={700} variant="h6">
        {name}
      </Typography>
      <ContentStack gap={12}>
        <Typography color="text.primary" width="40%">
          <b>Description:</b>
          <br />
          {description}
        </Typography>
        <Stack justifyContent="space-between" width="40%">
          <Typography color="text.primary" fontWeight={600} width="100%">
            Total reports number: {totalReportsNumber}
          </Typography>
          <Typography color="text.primary" fontWeight={600} width="100%">
            Total amount of money: {totalAmountOfMoney}
          </Typography>
        </Stack>
        <Stack flexDirection="column-reverse">
          <StyledButton
            variant="outlined"
            onClick={() => {
              setUsers(users.filter((user) => user.id !== id));
              toast.success("User has been succesfully deleted");
            }}
          >
            Delete
          </StyledButton>
        </Stack>
      </ContentStack>
    </WrapperStack>
  );
};
