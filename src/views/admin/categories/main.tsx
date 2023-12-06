import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ManageCategoryCard, StyledTextField } from "./ui";
import { StyledButton } from "../common";
import { toast } from "react-toastify";

export const ManageCategoriesPageView = () => {
  const [categories, setCategories] = React.useState(
    Array(5)
      .fill({})
      .map((_val, index) => ({
        id: index + 1,
        name: `Category ${index + 1}`,
      }))
  );

  const [categoryName, setCategoryName] = React.useState("");

  return (
    <Container
      maxWidth={false}
      sx={{ marginTop: "7rem", minHeight: "calc(100vh - 7rem)" }}
    >
      <Stack flexDirection="row" justifyContent="center" mb={6}>
        <Typography
          variant="h4"
          fontWeight="700"
          textTransform="uppercase"
          textAlign="center"
          color="text.primary"
        >
          CATEGORIES MANAGEMENT
        </Typography>
      </Stack>
      <Stack gap={6}>
        {categories.length === 0 ? (
          <Typography
            variant="h4"
            fontWeight="600"
            fontSize="1.25rem"
            textAlign="center"
            color="text.primary"
          >
            No categories
          </Typography>
        ) : (
          <Stack gap={4}>
            {categories.map((category) => (
              <ManageCategoryCard
                key={category.id}
                category={category}
                categories={categories}
                setCategories={setCategories}
              />
            ))}
          </Stack>
        )}
        <Stack gap={3}>
          <Typography fontSize="1.5rem" fontWeight="500" color="text.primary">
            Add a new category
          </Typography>
          <StyledTextField
            label="Name"
            variant="outlined"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <StyledButton
            variant="outlined"
            onClick={() => {
              if (categoryName) {
                setCategories([
                  ...categories,
                  {
                    id: categories[categories.length - 1]?.id + 1 || 1,
                    name: categoryName,
                  },
                ]);
                setCategoryName("");
              } else {
                toast.error("Please enter category name");
              }
            }}
          >
            Add
          </StyledButton>
        </Stack>
      </Stack>
    </Container>
  );
};
