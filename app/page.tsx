"use client";

import Image from "next/image";
import { Box, Container, Typography, Grid } from "@mui/material";
import Section from "@/components/Section";

import WifiIcon from "@mui/icons-material/Wifi";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import MonitorIcon from "@mui/icons-material/Monitor";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const items = [
  {
    icon: <WifiIcon fontSize="large" />,
    title: "안정적인 연결",
    desc: "와이파이 제공 · 비밀번호는 현장에 문의해주세요",
  },
  {
    icon: <CoffeeMakerIcon fontSize="large" />,
    title: "바로 쓰는 탕비",
    desc: "커피와 물은 셀프 이용이에요 ☕️",
  },
  {
    icon: <MonitorIcon fontSize="large" />,
    title: "집중 가능한 장비",
    desc: "모니터 2대 사용 가능 (상황에 따라 조정)",
  },
  {
    icon: <LibraryMusicIcon fontSize="large" />,
    title: "분위기 선택",
    desc: "브금 ON 가능 · 밴드용 앰프도 있어요",
  },
];

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

      {/* Content */}
      <Section eyebrow="사용 정보" title="누가, 언제 사용할 수 있나요?">
        <Box>
          <Typography variant="body1">
            정의교회 청년부라면 누구나, 언제든지 사용할 수 있어요
          </Typography>
          <Typography variant="body1">셀프바는 주중에만 운영돼요</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <ol>
            <li>출입대장에 대표자가 사용기록을 써주세요</li>
            <li>화분에 물주기 체크가 안되어있다면, 물을 주세요</li>
            <li>커피 및 다과는 셀프바를 이용해주세요😆</li>
          </ol>
        </Box>

        <Box
          component="details"
          sx={{
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.18)",
            bgcolor: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            p: 2,
            "&[open] summary": { opacity: 1 },
            "& summary": {
              cursor: "pointer",
              listStyle: "none",
              outline: "none",
            },
            "& summary::-webkit-details-marker": { display: "none" },
          }}
        >
          <Box
            component="summary"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Typography sx={{ fontWeight: 800 }}>▶️</Typography>
            <Typography sx={{ fontWeight: 700 }}>
              외부인도 사용 가능한가요?
            </Typography>
            <Box sx={{ flex: 1 }} />
            <Typography sx={{ opacity: 0.75, fontSize: 14 }}>
              눌러서 펼쳐보기
            </Typography>
          </Box>

          <Typography sx={{ mt: 1.5, lineHeight: 1.7 }}>
            허락받으면 가능해요.
            <br />
            한명 이상의 정의청년이 항상 같이 있어야 하고,
            <br />
            담당 교역자나 청년부 목사님께 미리 허락을 구해주세요.
          </Typography>
        </Box>
      </Section>

      <Box sx={{ backgroundColor: "#b8b8b8" }}>
        <Section
          // eyebrow="너가 뭘 좋아할지 몰라서..."
          title="뭐가 있어요!?"
          desc="너가 뭘 좋아할지 몰라서...다 준비해봤어..."
        >
          {/* <Box>
            <Box sx={{ width: "100%", height: "auto" }}>test</Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <WifiIcon sx={{ fontSize: { xs: 36, md: 120 } }} />
                <Typography>Free Wifi</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CoffeeMakerIcon sx={{ fontSize: { xs: 36, md: 120 } }} />
                <Typography>캡슐커피머신</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <MonitorIcon sx={{ fontSize: { xs: 36, md: 120 } }} />
                <Typography>모니터 2대</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <LibraryMusicIcon sx={{ fontSize: { xs: 36, md: 120 } }} />
                <Typography>브금용 스피커</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <ul>
                <li>
                  와이파이 이름, 비밀번호는 물어봐주세요!
                  <ul>
                    <li>교역자나...옆사람에게...!</li>
                  </ul>
                </li>
                <li>모니터, 스피커는 어느 순간 없어질 수도 있어요</li>
              </ul>
            </Box>
          </Box> */}
        </Section>
      </Box>
    </>
  );
}
