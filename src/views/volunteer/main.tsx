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
import { moneyFormattingUAH } from "../admin/users/ui/ManageUserCard";

const volunteer = {
  id: 1,
  name: "Polina Berest",
  about: "Student of Kharkiv National University of Radio Electronics",
  img: "/polinajpg.jpg",
  donateLink: "https://send.monobank.ua/jar/2xKEJ87NXq",
  categories: "Medicine, Trench candles, Hygiene",
};

const statistic = {
  numberOfReports: 3,
  totalValue: 32950,
};

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
          textAlign="center"
          color="text.primary"
        >
          {volunteer.name}
        </Typography>
        <div style={{ width: "68px" }} />
      </Stack>
      <Stack direction="row" columnGap={8}>
        <Box
          width="50%"
          maxHeight="500px"
          display="flex"
          justifyContent="center"
        >
          <Image
            alt="volunteers photo"
            src={volunteer.img}
            width={475}
            height={375}
            style={{ height: "100%", borderRadius: "0.75rem" }}
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
          <Stack gap={1}>
            <Typography variant="h6" color="text.primary" fontWeight="700">
              Categories:{" "}
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight="700">
              {volunteer.categories}
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
              <Stack gap={2} alignItems="center">
                <Typography
                  variant="h4"
                  textAlign="center"
                  color="text.secondary"
                  fontWeight="700"
                >
                  {moneyFormattingUAH.format(statistic.totalValue)}
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
