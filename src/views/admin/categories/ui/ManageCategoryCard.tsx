import * as React from "react";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { WrapperStack } from "./styled";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";

interface Category {
  id: number;
  name: string;
}

interface Props {
  category: Category;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

export const ManageCategoryCard = ({
  category: { id, name },
  categories,
  setCategories,
}: Props) => {
  return (
    <WrapperStack
      padding={2}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography flex={1} color="text.primary" fontWeight={600}>
        {name}
      </Typography>
      <IconButton
        color="error"
        onClick={() => {
          setCategories(categories.filter((category) => category.id !== id));
          toast.success("Category has been succesfully deleted");
        }}
      >
        <DeleteIcon />
      </IconButton>
    </WrapperStack>
  );
};
