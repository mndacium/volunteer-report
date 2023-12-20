import * as React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ReportCard } from "@/components/report-card";
import Button from "@mui/material/Button";

const reports = [
  {
    id: 1,
    name: "Trench candles",
    description:
      "6 boxes of trench candles for our soldiers and some goodies.The primary focus of the initiative is to provide our soldiers with essential trench candles. These candles serve as a source of warmth.In addition to the trench candles, the initiative includes the provision of sweets.",
    destination: "AFU",
    purchaseValue: 7750,
    categories: "Trench candles",
    img: "/candlesjpg.jpg",
    volunteer: {
      id: 1,
      name: "Polina Berest",
      about: "Student of Kharkiv National University of Radio Electronics",
    },
  },
  {
    id: 2,
    name: "Dry showers",
    description:
      "The objective of this volunteer effort is to support soldiers by addressing their hygiene needs through the provision of portable, waterless shower facilities. ",
    destination: "AFU",
    purchaseValue: 5200,
    categories: "Hygiene",
    img: "/dry_shower.jpg",
    volunteer: {
      id: 1,
      name: "Polina Berest",
      about: "Student of Kharkiv National University of Radio Electronics",
    },
  },
  {
    id: 3,
    name: "Tourniquets",
    description:
      "Recognizing the importance of well-equipped medical resources on the war, this initiative aims to enhance the medical capabilities of our soldiers and military hospitals.",
    destination: "AFU",
    purchaseValue: 20000,
    categories: "Medicine",
    img: "/tourniquet.jpg",
    volunteer: {
      id: 1,
      name: "Polina Berest",
      about: "Student of Kharkiv National University of Radio Electronics",
    },
  },
];

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
