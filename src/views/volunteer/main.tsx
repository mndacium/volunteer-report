import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ButtonLink } from "@/components/button-link";
import { ReportCard } from "@/components/report-card";

const volunteer = {
  id: 1,
  name: "Volunteer",
  about:
    "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  img: "https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  donateLink: "https://www.google.com/",
};

const statistic = {
  numberOfReports: 27,
  totalValue: 27000,
};

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

export const VolunteerPageView = () => {
  const router = useRouter();

  return (
    <Container
      maxWidth={false}
      sx={{ marginTop: "7rem", marginBottom: "6rem" }}
    >
      <Stack flexDirection="row" justifyContent="space-between" mb={6}>
        <Button
          onClick={router.back}
          color="inherit"
          sx={{ fontWeight: "400" }}
        >
          &lt; back
        </Button>
        <Typography
          variant="h4"
          fontWeight="700"
          textTransform="uppercase"
          textAlign="center"
          color="text.primary"
        >
          {volunteer.name}
        </Typography>
        <div style={{ width: "68px" }} />
      </Stack>
      <Stack direction="row" columnGap={8}>
        <Box width="50%" maxHeight="500px">
          <Image
            alt="volunteers photo"
            src="https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={630}
            height={375}
            style={{ width: "100%", height: "100%", borderRadius: "0.75rem" }}
          />
        </Box>
        <Stack direction="column" spacing={4} width="40%">
          <Stack gap={1}>
            <Typography variant="h6" color="text.primary" fontWeight="700">
              About us:
            </Typography>
            <Typography variant="body1" color="text.primary">
              {volunteer.about}
            </Typography>
          </Stack>
          <Stack gap={2}>
            <Typography variant="h6" color="text.primary" fontWeight="700">
              Statistic:
            </Typography>
            <Stack flexDirection="row" justifyContent="space-evenly">
              <Stack gap={2}>
                <Typography
                  variant="h4"
                  textAlign="center"
                  color="text.secondary"
                  fontWeight="700"
                >
                  {statistic.numberOfReports}
                </Typography>
                <Typography variant="h6" color="text.primary" fontWeight="400">
                  Number of <br />
                  reports
                </Typography>
              </Stack>
              <Stack gap={2}>
                <Typography
                  variant="h4"
                  textAlign="center"
                  color="text.secondary"
                  fontWeight="700"
                >
                  {statistic.totalValue}
                </Typography>
                <Typography variant="h5" color="text.primary" fontWeight="400">
                  Total value
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack alignItems="center">
            <Link
              href={`/volunteers/${volunteer.id}/detailed`}
              underline="always"
            >
              <Typography variant="body1" fontWeight="700">
                See detailed statistics...
              </Typography>
            </Link>
          </Stack>
          <ButtonLink href={volunteer.donateLink} text="Donate" />
        </Stack>
      </Stack>
      <Stack mt={6} mb={6} alignItems="center">
        <Typography
          variant="h5"
          fontWeight="700"
          textAlign="center"
          color="text.primary"
        >
          Reports
        </Typography>
      </Stack>
      <Stack gap={6}>
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} shouldHideVolunteerName />
        ))}
      </Stack>
    </Container>
  );
};
