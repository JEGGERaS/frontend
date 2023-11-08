import { Box, Button, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import sketchPhoto from "../../assets/sketchPhoto.png";
import Card from "../../components/common/Card";
import Layout from "../../components/common/Layout";
import { tokens } from "../../constants/color-palette";
import sketchPhoto from "../../assets/sketchPhoto.png";
import CustomButton from "@/components/common/CustomButton";

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const fetchFromCookies = "Łukasz";

  return (
    <Layout page={"Home"}>
      <Grid xs={4}>
        <Card bgcolor={theme.palette.secondary.light}>
          <Box width="100%" display="flex" flexDirection="column">
            <Typography
              color={theme.palette.text.secondary}
              variant="h4"
              fontWeight="700"
              letterSpacing="1px"
            >
              Witaj z powrotem,
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              variant="h4"
              fontWeight="700"
              letterSpacing="1px"
            >
              {fetchFromCookies}!
            </Typography>
          </Box>
          <Box marginTop="1.5rem" width="100%">
            <Typography
              color={theme.palette.text.secondary}
              width="85%"
              variant="h4"
              fontWeight="500"
              align="justify"
            >
              Jeśli potrzebujesz wsparcia w obsłudze systemu, skorzystaj z
              naszego szybkiego poradnika. Życzymy owocnej pracy!
            </Typography>
          </Box>
          <Box marginTop="1.5rem" width="100%">
            <CustomButton text="Przejdź" bgcolor={theme.palette.secondary.main} width="40%" />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "0.6rem",
                "&:hover": {
                  bgcolor: theme.palette.secondary.dark,
                },
              }}
            >
              <Typography
                color={colors.white[500]}
                fontWeight="600"
                textTransform="capitalize"
                letterSpacing="1px"
              >
                Przejdź
              </Typography>
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid xs={8}>
        <Card>
          <Box display="flex" justifyContent="center" overflow="hidden">
            <Image
              height={300}
              width={700}
              src={sketchPhoto}
              alt={"Jegger photo"}
            />
          </Box>
        </Card>
      </Grid>
      <Grid xs={8} mdOffset="auto">
        <Card bgcolor={theme.palette.primary.light}>
          <Box display="flex" justifyContent="center">
            <Typography
              color={theme.palette.text.secondary}
              variant="h4"
              fontWeight="500"
            >
              Filmaj &#169; Wszystkie prawa zastrzeżone
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Layout>
  );
}
