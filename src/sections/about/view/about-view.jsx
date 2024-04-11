import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useResponsive } from '../../../hooks/use-responsive';
import { HEADER } from '../../../layouts/dashboard/config-layout';

const SPACING = 100;

export default function AboutPage() {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Container maxWidth="xl" sx={{ position: 'relative' }}>
      <Grid
        container
        spacing={3}
        sx={{
          py: `${HEADER.H_MOBILE + SPACING}px`,
          ...(lgUp && {
            paddingTop: `${HEADER.H_DESKTOP + SPACING}px`,
          }),
        }}
      >
        <Container sx={{ display: 'flex', flexDirection: 'row' }}>
          <Container sx={{ width: '50%' }}>
            <Container sx={{ textAlign: 'left' }}>
              <Typography sx={{ fontSize: 50, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 3 }}>
                <span style={{ color: '#1994F2' }}>About</span> GeoLeaf
              </Typography>
              <Typography sx={{ fontSize: 17, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}>
                Our platform is designed for both the savy investor and the newcorner, offering a
                securem straightforward, and profitable staking experience
              </Typography>
            </Container>
            <Container
              sx={{
                justifyContent: 'left',
                display: 'flex',
                gap: 5,
                marginBottom: 20,
                alignItems: 'center',
              }}
            >
              <IconButton
                sx={{
                  width: 200,
                  height: 50,
                  color: '#fff',
                  bgcolor: '#2BA5E7',
                  borderRadius: 60,
                }}
              >
                <Typography variant="subtitle2" noWrap>
                  See White Paper
                </Typography>
              </IconButton>
              <Container sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  sx={{
                    width: 40,
                    height: 40,
                    color: '#fff',
                    bgcolor: 'transparent',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: '#2BA5E7',
                  }}
                >
                  <Box
                    component="img"
                    alt="discord"
                    src="/assets/icons/ic_discord.svg"
                    sx={{ width: 28 }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    width: 40,
                    height: 40,
                    color: '#fff',
                    bgcolor: 'transparent',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: '#2BA5E7',
                  }}
                >
                  <img
                    src="/assets/icons/ic_twitter.svg"
                    alt="discord"
                    style={{ width: 25, height: 25 }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    width: 40,
                    height: 40,
                    color: '#fff',
                    bgcolor: 'transparent',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: '#2BA5E7',
                  }}
                >
                  <img
                    src="/assets/icons/ic_telegram.svg"
                    alt="discord"
                    style={{ width: 25, height: 25 }}
                  />
                </IconButton>
              </Container>
            </Container>
          </Container>
          <Container sx={{ width: '50%' }}>
            <img src="/assets/icons/about_left_icon.svg" alt="left_icon" />
          </Container>
        </Container>
        <Container sx={{ bgcolor: '1B1B1B' }}>
          <Container sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: 50, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 3 }}>
              Company Protocol
            </Typography>
            <Typography sx={{ fontSize: 17, color: '#7F7F7F', lineHeight: 1.5, marginBottom: 5 }}>
              Our protocols are the bedrock of our commitment to providing a trusted
              <br />
              and secure environment for cryptocurrency investment and staking
            </Typography>
          </Container>
          <Container sx={{ display: 'flex', flexDirection: 'row', px: 10, gap: 2 }}>
            <Container
              sx={{ borderRadius: 1, border: '1px solid', py: 3, px: 2, bgcolor: '#212121' }}
            >
              <Container
                sx={{
                  display: 'flex',
                  px: '0 !important',
                  flexDirection: 'row',
                  justifyContent: 'left',
                  gap: 1.5,
                  marginBottom: 1.5,
                }}
              >
                <Box
                  component="img"
                  alt="discord"
                  src="/assets/icons/ic_flat.svg"
                  sx={{ width: 28 }}
                />
                <Typography sx={{ color: '#1994F2', fontSize: 20, lineHeight: 1.5 }}>
                  Mint
                </Typography>
              </Container>
              <Typography sx={{ color: '#FFFFFF', fontSize: 14, lineHeight: 2 }}>
                Experience a user-friendly process that ensures the seamless minting of your
                cryptocurrence, complete with top-tier security protocols to protect yournew assets
              </Typography>
            </Container>
            <Container
              sx={{ borderRadius: 1, border: '1px solid', py: 3, px: 2, bgcolor: '#212121' }}
            >
              <Container
                sx={{
                  display: 'flex',
                  px: '0 !important',
                  flexDirection: 'row',
                  justifyContent: 'left',
                  gap: 1.5,
                  marginBottom: 1.5,
                }}
              >
                <Box
                  component="img"
                  alt="discord"
                  src="/assets/icons/ic_stake.svg"
                  sx={{ width: 28 }}
                />
                <Typography sx={{ color: '#1994F2', fontSize: 20, lineHeight: 1.5 }}>
                  Stake
                </Typography>
              </Container>
              <Typography sx={{ color: '#FFFFFF', fontSize: 14, lineHeight: 2 }}>
                our platform offers an efficient way to stake your assets and grow your investments
                through competitive staking rewards, all backed by robust security measures.
              </Typography>
            </Container>
            <Container
              sx={{ borderRadius: 1, border: '1px solid', py: 3, px: 2, bgcolor: '#212121' }}
            >
              <Container
                sx={{
                  display: 'flex',
                  px: '0 !important',
                  flexDirection: 'row',
                  justifyContent: 'left',
                  gap: 1.5,
                  marginBottom: 1.5,
                }}
              >
                <Box
                  component="img"
                  alt="discord"
                  src="/assets/icons/ic_capa.svg"
                  sx={{ width: 28 }}
                />
                <Typography sx={{ color: '#1994F2', fontSize: 20, lineHeight: 1.5 }}>
                  Governance
                </Typography>
              </Container>
              <Typography sx={{ color: '#ffffff', fontSize: 14, lineHeight: 2 }}>
                Influence the future direction of the platform, propose or vote on new features, and
                become an integral part of our ecosystems&apos;s growth and evolution
              </Typography>
            </Container>
          </Container>
        </Container>
      </Grid>
      <Container sx={{ position: 'absolute', left: 0, top: 2 }}>
        <img src="/assets/icons/about_top_background.svg" alt="background" />
      </Container>
    </Container>
  );
}
