import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ReportCard } from "@/components/report-card";

export const ManageReportsPageView = () => {
  const [reports, setReports] = React.useState(
    Array(5)
      .fill({})
      .map((_val, index) => ({
        id: index + 1,
        name: `Report ${index + 1}`,
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
      }))
  );

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
          Reports MANAGEMENT
        </Typography>
      </Stack>
      {reports.length === 0 ? (
        <Typography
          variant="h4"
          fontWeight="600"
          fontSize="1.25rem"
          textAlign="center"
          color="text.primary"
        >
          No reports
        </Typography>
      ) : (
        <Stack gap={4}>
          {reports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              isAdmin
              reports={reports}
              setReports={setReports}
            />
          ))}
        </Stack>
      )}
    </Container>
  );
};
