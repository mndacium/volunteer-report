import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@mui/material/Link";
import { StyledButton } from "./styled";
import { toast } from "react-toastify";
import { moneyFormattingUAH } from "@/views/admin/users/ui/ManageUserCard";

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
    <Box width="50%" maxHeight="500px" display="flex" justifyContent="center">
      <Image
        alt="volunteers photo"
        src={report.img}
        width={600}
        height={375}
        style={{ height: "100%", borderRadius: "0.75rem" }}
      />
    </Box>
    <Stack direction="column" spacing={4} width="40%">
      <Typography variant="h5" color="text.secondary" fontWeight="700">
        {report.name}
      </Typography>
      {!shouldHideVolunteerName && (
        <Link href={`/volunteers/${report.volunteer.id} `} underline="hover">
          <Typography variant="h6" color="text.secondary" fontWeight="600">
            {report.volunteer.name}
          </Typography>
        </Link>
      )}
      <Stack gap={1}>
        <Typography fontSize="1.15rem" fontWeight="600" color="text.primary">
          Categories: {report.categories}
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography fontSize="1.15rem" fontWeight="600" color="text.primary">
          Description:
        </Typography>
        <Typography fontSize="1.15rem" color="text.primary">
          {report.description}
        </Typography>
      </Stack>
      <Typography fontSize="1.15rem" color="text.primary" fontWeight="600">
        Destination: {report.destination}
      </Typography>
      <Typography fontSize="1.15rem" color="text.primary" fontWeight="600">
        Purchase value: {moneyFormattingUAH.format(report.purchaseValue)}
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
