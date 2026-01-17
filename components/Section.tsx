import { Box, Container, Typography } from "@mui/material";

export default function Section(props: {
  eyebrow?: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  const { eyebrow, title, desc, children } = props;

  return (
    <Box
      component={"section"}
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {eyebrow && (
          <Typography variant="overline" sx={{ fontSize: 20 }}>
            {eyebrow}
          </Typography>
        )}
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 0 }}>
          {title}
        </Typography>
        {desc && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 720 }}
          >
            {desc}
          </Typography>
        )}
        {children && <Box sx={{ mt: 4 }}>{children}</Box>}
      </Container>
    </Box>
  );
}
