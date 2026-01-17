"use client";

import Link from "next/link";
import Image from "next/image";
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
            backgroundColor: "#FFF",
            pt: 4,
            pb: 2,
            px: 1,
            borderRadius: "0px 0px 20px 20px",
            // border: "1px black solid",
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
            <Box sx={{ width: "120px" }} component={Link} href="/">
              <Image
                src="/banner.png"
                alt="Appbar Logo to HomePage"
                width={175}
                height={40}
              />
            </Box>
            {/* <Typography component={Link} href="/" variant="h6">
              {site.name}
            </Typography> */}
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
                <Typography sx={{ fontSize: 18 }}>{item.label}</Typography>
              </Button>
            ))}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
