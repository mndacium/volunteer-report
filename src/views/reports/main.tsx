import * as React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ReportCard } from "@/components/report-card";
import Button from "@mui/material/Button";

const reports = Array(5)
  .fill({})
  .map((_val, index) => ({
    id: index + 1,
    name: "Test Report",
    description:
      "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    destination: "Test destination",
    purchaseValue: 123.55,
    categories: "test category",
    img: "https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    volunteer: {
      id: index + 1,
      name: "Volunteer",
      about:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
  }));

export const ReportsPageView = () => {
  const [isFilterDropdownOpened, setIsFilterDropdownOpened] =
    React.useState(false);

  const toggleFilterDropdownOpen = React.useCallback(
    () => setIsFilterDropdownOpened(!isFilterDropdownOpened),
    [isFilterDropdownOpened]
  );

  return (
    <Container maxWidth={false} sx={{ marginTop: "7rem" }}>
      <Stack flexDirection="row" justifyContent="space-between" mb={6}>
        <Button
          startIcon={<FilterAltOutlinedIcon />}
          endIcon={
            isFilterDropdownOpened ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
          onClick={toggleFilterDropdownOpen}
          color="secondary"
          sx={{ textTransform: "none", fontWeight: "400" }}
        >
          Filter
        </Button>
        <Typography
          variant="h4"
          fontWeight="700"
          textTransform="uppercase"
          textAlign="center"
          color="text.primary"
        >
          All Reports
        </Typography>
        <div style={{ width: "100px" }} />
      </Stack>
      <Stack gap={6}>
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </Stack>
    </Container>
  );
};
