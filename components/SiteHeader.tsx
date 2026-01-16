"use client";

import Link from "next/link";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { site } from "@/lib/site";

export default function SiteHeader() {
  return (
    <AppBar elevation={0} color="transparent" position="sticky">
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Home */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography component={Link} href="/" variant="h6">
              {site.name}
            </Typography>
          </Box>

          {/* others */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            {site.nav.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                color="inherit"
                sx={{
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
