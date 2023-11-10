import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { VolunteerCard } from "./ui";
import Grid from "@mui/material/Grid";

const volunteers = Array(5)
  .fill({})
  .map((_val, index) => ({
    id: index + 1,
    name: "Volunteer",
    about:
      "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    img: "https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }));

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
