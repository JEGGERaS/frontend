import Card from "@/components/common/Card";
import Layout from "@/components/common/Layout";
import { alpha, Box, Button, Paper, styled, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "constants/color-palette";
import Image from "next/image";

import sketchPhoto from "../../assets/sketchPhoto.png";

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const fetchFromCookies = "Łukasz";

  return (
    <Layout page={"Home"}>
      <Grid xs={4}>
        <Card bgcolor={alpha(theme.palette.secondary.main, 0.2)}>
          <Box width="100%" display="flex" flexDirection="column">
            <Typography variant="h4" fontWeight="700" letterSpacing="1px">
              Witaj z powrotem,
            </Typography>
            <Typography variant="h4" fontWeight="700" letterSpacing="1px">
              {fetchFromCookies}!
            </Typography>
          </Box>
          <Box marginTop="1.5rem" width="100%">
            <Typography width="85%" variant="h4" fontWeight="500" textAlign="left">
              Jeśli potrzebujesz wsparcia w obsłudze systemu, skorzystaj z naszego szybkiego poradnika. Życzymy owocnej
              pracy!
            </Typography>
          </Box>
          <Box marginTop="1.5rem" width="100%">
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "0.5rem",
                "&:hover": {
                  bgcolor: colors.secondary[600],
                },
              }}
            >
              <Typography fontWeight="600" textTransform="capitalize" letterSpacing="1px">
                Przejdź
              </Typography>
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid xs={8}>
        <Card>
          <Box>
            <Image height={300} width={700} src={sketchPhoto} alt={""} />
          </Box>
        </Card>
      </Grid>
      <Grid xs={8} mdOffset="auto">
        <Card bgcolor={alpha(theme.palette.primary.main, 0.2)}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h4" fontWeight="500">
              Filmaj &#169; Wszystkie prawa zastrzeżone
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Layout>
  );
}
