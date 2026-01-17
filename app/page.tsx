"use client";

import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* Hero Background */}
      <Box
        sx={{
          position: "relative",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: { xs: 0, md: 3 },
          mx: { xs: 0, md: 3 },
          mt: { xs: 0, md: -9 },
          minHeight: { xs: "100vh", md: "calc(100vh - 48px)" },
        }}
      >
        <Image
          src="/hero.png"
          alt="hero background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        {/* overlay darker */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.22) 10%, rgba(0,0,0,0.55) 50%)",
          }}
        />
        {/* overlay top text */}
        {/* center content */}
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "common.white",
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              fontSize: { xs: 40, md: 64 },
              textShadow: "0 8px 30px rgba(0,0,0,0.35)",
            }}
          >
            정청아지트
          </Typography>

          <Typography
            sx={{
              mt: 2,
              mx: "auto",
              maxWidth: 720,
              fontSize: { xs: 18, md: 24 },
              fontWeight: 600,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            정의마루 1층에 새로 생긴, 청년부를 위한 아-지트
          </Typography>

          {/* bottom logos */}
          <Box
            sx={{
              mt: { xs: 24, md: 32 },
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: { xs: 2, md: 4 },
              color: "rgba(255,255,255,0.75)",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, letterSpacing: "0.02em" }}
            >
              Powered by{" "}
            </Typography>
            <Image
              src="/church_logo-bgwhite.png"
              alt="church logo pgn"
              width={32}
              height={36}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, letterSpacing: "0.02em" }}
            >
              높은뜻정의교회
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
