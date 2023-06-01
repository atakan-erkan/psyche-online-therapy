import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsorlu
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="img/psyche.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Psyche</Typography>
        <Typography color={medium}>
          <a
            style={{ color: "#175c4c" }}
            href="https://www.psychetherapy.online/"
          >
            psychetherapy.online
          </a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Danışanlarımızın terapi yolculuklarını teknoloji ile
        kişiselleştiriyoruz.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
