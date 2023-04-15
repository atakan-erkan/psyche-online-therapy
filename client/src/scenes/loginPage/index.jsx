import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box width="100%" p="1rem 6%" textAlign="center" marginTop={10}>
        <a href="/">
          <img src="img/psychelogo.png" width={500} alt="PSYCHE" />
        </a>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Psyche'ye Hoşgeldiniz! Zihninizi ve ruhunuzu güçlendirin, hayatınızı
          değiştirin.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
