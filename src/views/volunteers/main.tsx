import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { VolunteerCard } from "./ui";
import Grid from "@mui/material/Grid";

const volunteers = [
  {
    id: 1,
    name: "Polina Berest",
    about: "Student of Kharkiv National University of Radio Electronics",
    img: "/polinajpg.jpg",
  },
  {
    id: 2,
    name: "Taras Chmut",
    about: `Head of the "Come Back Alive" Foundation.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Taras_Chmut%2C_Kyiv_2021%2C_01.jpg",
  },
];

export const VolunteersPageView = () => {
  return (
    <Container maxWidth={false} sx={{ marginTop: "7rem" }}>
      <Typography
        variant="h4"
        fontWeight="700"
        textTransform="uppercase"
        textAlign="center"
        mb={6}
        color="text.primary"
      >
        Our Volunteers
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {volunteers.map((volunteer) => (
          <Grid key={volunteer.id} item xs={12} md={6} lg={4}>
            <VolunteerCard volunteer={volunteer} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
