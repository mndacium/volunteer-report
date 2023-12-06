import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@mui/material/Link";
import { StyledButton } from "./styled";
import { toast } from "react-toastify";

interface Report {
  id: number;
  name: string;
  description: string;
  destination: string;
  categories: string;
  purchaseValue: number;
  img: string;
  volunteer: {
    id: number;
    name: string;
    about: string;
  };
}

interface Props {
  report: Report;
  reports?: Report[];
  setReports?: (reports: Report[]) => void;
  shouldHideVolunteerName?: boolean;
  isAdmin?: boolean;
}

export const ReportCard = ({
  report,
  reports,
  setReports,
  shouldHideVolunteerName = false,
  isAdmin = false,
}: Props) => (
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
      <Typography variant="h5" color="text.secondary" fontWeight="700">
        {report.name}
      </Typography>
      {!shouldHideVolunteerName && (
        <Link href={`/volunteers/${report.volunteer.id} `} underline="hover">
          <Typography variant="h6" color="text.primary" fontWeight="700">
            {report.volunteer.name}
          </Typography>
        </Link>
      )}
      <Stack gap={1}>
        <Typography variant="h6" fontWeight="700" color="text.primary">
          Categories: {report.categories}
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography variant="h6" fontWeight="700" color="text.primary">
          Description:
        </Typography>
        <Typography variant="body1" color="text.primary">
          {report.description}
        </Typography>
      </Stack>
      <Typography variant="h6" color="text.primary" fontWeight="700">
        Destination: {report.destination}
      </Typography>
      <Typography variant="h6" color="text.primary" fontWeight="700">
        Purchase value: ₴{report.purchaseValue}
      </Typography>
      {isAdmin && (
        <StyledButton
          onClick={() => {
            if (setReports && reports) {
              setReports(
                reports.filter((arrReport) => arrReport.id !== report.id)
              );
              toast.success("Report has been succesfully deleted");
            }
          }}
        >
          Delete
        </StyledButton>
      )}
    </Stack>
  </Stack>
);
