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
    desc: "와이파이 제공 · 비밀번호는 현장에서 문의해주세요",
  },
  {
    icon: <CoffeeMakerIcon fontSize="large" />,
    title: "바로 쓰는 탕비실(사실 셀프바)",
    desc: "커피와 물은 셀프 이용이에요 ☕️",
  },
  {
    icon: <MonitorIcon fontSize="large" />,
    title: "집중 가능한 장비",
    desc: "모니터 2대 사용 가능 (상황에 따라 조정)",
  },
  {
    icon: <LibraryMusicIcon fontSize="large" />,
    title: "세계 최고의 무드조성",
    desc: "브금 ON 가능 · 밴드용 앰프와 믹서도 있어요",
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
      <Section eyebrow="Usage" title="누가, 언제 사용할 수 있나요?">
        <Box>
          <Typography variant="body1">
            정의교회 청년부라면 누구나, 언제든지 사용할 수 있어요
          </Typography>
          <Typography variant="body1">셀프바는 주중에만 운영돼요</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <ol>
            <li>출입대장에 대표자가 사용기록을 써주세요</li>
            <li>화분 흙이 말라가고 있다면, 물을 주세요</li>
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

      <Box sx={{ backgroundColor: "rgb(229, 231, 229)" }}>
        <Section
          // eyebrow="너가 뭘 좋아할지 몰라서..."
          title="뭐가 있어요!?"
          desc="너가 뭘 좋아할지 몰라서...다 준비해봤어..."
        >
          <Grid container spacing={4}>
            {items.map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    p: 3,
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Box sx={{ opacity: 0.7 }}>{item.icon}</Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        color: "text.secondary",
                        wordBreak: "keep-all",
                        overflowWrap: "break-word",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Box>

      <Box>
        <Section eyebrow="대충만든 도면" title="어떻게 생겼어요?">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              // aspectRatio: "5/4",
              borderRadius: 2,
              overflow: "hidden",
              // backgroundColor: "red", // dev test color
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "60%" },
                aspectRatio: "5/4",
                // height: "100%",
              }}
            >
              <Image
                src="/map.png"
                alt="drowing map"
                fill
                style={{ objectFit: "contain" }}
                priority
                unoptimized
              />
            </Box>
          </Box>
        </Section>

        <Section eyebrow="Contact us" title="궁금한 게 있어요!">
          <Box sx={{ mb: -8 }}>
            <Typography>
              중요한 문제라면 ▶ 담당 교역자 or 청년부 목사님께 문의
            </Typography>
            <Typography>
              그정도는 아니라면 ▶ 2청년부 명하준에게 연락해주세요
            </Typography>
            <Typography variant="body2">
              연락처요? 모르면 안타깝죠 머...
            </Typography>
          </Box>
        </Section>
      </Box>
    </>
  );
}
