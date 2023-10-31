import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ButtonLink } from "./ui";
import Image from "next/image";

export const HomePageView = () => (
  <Container maxWidth={false} sx={{ marginTop: "7rem" }}>
    <Stack direction="column" rowGap={12}>
      <Stack direction="row" columnGap={8}>
        <Stack rowGap={4} width="40%" justifyContent="center">
          <Typography fontSize="1.75rem" fontWeight="700" color="text.primary">
            Your donation,
            <br />
            Their impact
          </Typography>
          <Typography fontSize="1rem" fontWeight="400" color="text.primary">
            Volunteers&apos; reports are a reflection of our collective
            strength. Every donation you make has a real impact on people&apos;s
            lives. See it yourself by looking at our reports.
          </Typography>
          <ButtonLink href="/reports" text="See Reports" />
        </Stack>
        <Box width="60%" maxHeight="750px">
          <Image
            alt="volunteers photo"
            src="https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={630}
            height={375}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
      <Stack direction="row" columnGap={8}>
        <Box width="60%" maxHeight="750px">
          <Image
            alt="volunteers photo"
            src="https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={630}
            height={375}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Stack
          direction="column"
          spacing={4}
          width="40%"
          justifyContent="center"
        >
          <Typography fontSize="1.75rem" fontWeight="700" color="text.primary">
            Meet our dedicated Volunteers
          </Typography>
          <Typography fontSize="1rem" fontWeight="400" color="text.primary">
            Learn more about our inspiring volunteers and their incredible work.
            Click the button below to view a list of volunteers and their
            accomplishments.
          </Typography>
          <ButtonLink href="/volunteers" text="Our Volunteers" />
        </Stack>
      </Stack>
      <Stack
        spacing={4}
        alignItems="center"
        textAlign="center"
        maxWidth="33%"
        alignSelf="center"
      >
        <Typography fontSize="1.25rem" fontWeight="700" color="text.primary">
          Join us in making a differences
        </Typography>
        <Typography fontSize="1rem" fontWeight="400" color="text.primary">
          Ready to make a positive impact as a volunteer? Download our mobile
          app now and become a part of our dedicated team of changemakers. Your
          help can transform lives and communities. Together, we can create a
          better future for all.
        </Typography>
        <ButtonLink href="/download" text="Download" />
      </Stack>
    </Stack>
  </Container>
);
