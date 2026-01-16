import { Box, Container, Divider, Typography } from "@mui/material";

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ mt: 8, pb: 6 }}>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {"All rights reserved @"}
          {new Date().getFullYear()} 높은뜻정의교회 청년부
        </Typography>
      </Container>
    </Box>
  );
}
