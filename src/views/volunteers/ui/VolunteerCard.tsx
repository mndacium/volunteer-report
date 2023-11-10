import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ButtonLink } from "@/components/button-link";
import CardMedia from "@mui/material/CardMedia";

interface Props {
  volunteer: {
    id: number;
    name: string;
    about: string;
    img: string;
  };
}

export const VolunteerCard = ({
  volunteer: { id, name, about, img },
}: Props) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "0.5rem" }}>
      <CardContent>
        <Stack gap={3}>
          <CardMedia
            sx={{ height: 220, borderRadius: "0.5rem" }}
            image={img}
            title={name}
          />
          <Typography variant="h5" color="text.secondary" fontWeight="700">
            {name}
          </Typography>
          <Stack gap={1}>
            <Typography variant="body1" color="text.primary" fontWeight="700">
              About us:
            </Typography>
            <Typography variant="body2" color="text.primary">
              {about}
            </Typography>
          </Stack>
          <ButtonLink text="Read more" href={`volunteers/${id}`} />
        </Stack>
      </CardContent>
    </Card>
  );
};
