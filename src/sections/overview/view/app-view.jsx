import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useResponsive } from '../../../hooks/use-responsive';
import { HEADER } from '../../../layouts/dashboard/config-layout';

const SPACING = 100;
const homeData = [
  {
    price: '$166,244',
    title: 'Market Cap',
  },
  {
    price: '$166,244',
    title: 'Total Treasury Value',
  },
  {
    price: '$166,244',
    title: 'Most Recent Buyback',
  },
  {
    price: '$166,244',
    title: 'Daily Volume',
  },
];
export default function AppView() {
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
        <Container>
          <Container sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: 50, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 3 }}>
              Weclome to <span style={{ color: '#1994F2' }}>GeoLeaf</span> Multi
              <br /> Chain Staking Platform
            </Typography>
            <Typography sx={{ fontSize: 17, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim vaniam, qui
            </Typography>
          </Container>
          <Container sx={{ justifyContent: 'center', display: 'flex', gap: 10,marginBottom:20 }}>
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
                Create Pool
              </Typography>
            </IconButton>

            <IconButton
              sx={{
                width: 200,
                height: 50,
                color: '#fff',
                bgcolor: 'transparent',
                borderRadius: 60,
                border: '1px solid',
                borderColor: '#2BA5E7',
              }}
            >
              <Typography variant="subtitle2" noWrap>
                See Benefit
              </Typography>
            </IconButton>
          </Container>
          <Grid
            container
            spacing={2}
            sx={{ height:136, borderRadius: 2, border: '1px solid', borderColor: '#343434', px:4, py:2 }}
          >
            {homeData.map((data, index) => (
              <Grid item xs={3} sx={{borderRight: index !== homeData.length-1 ? '1px solid' : '', borderColor: '#343434', px:4, py:2}}>
                <Typography sx={{fontSize:31 , color:'#FFFFFF'}}>{data.price}</Typography>
                <Typography sx={{fontSize:13 , color:'#6E6E6E'}}>{data.title}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
      <Container sx={{ width: '70%', height: '100%', position: 'absolute', right: 0, top: 2 }}>
        <img src="/assets/icons/Frame.svg" alt="background" />
      </Container>
    </Container>
  );
}
