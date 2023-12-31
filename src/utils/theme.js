import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    inputError: "#d73a4a",
  },
  backgroundColor: {
    main: "#e1e4e8",
    item: "#FFFFFF",
    appBar: "#24292e",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({ android: "Roboto", ios: "Arial font" }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
