import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Pretendard",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "sans-serif",
    ].join(", "),
  },
  shape: { borderRadius: 16 },
});
