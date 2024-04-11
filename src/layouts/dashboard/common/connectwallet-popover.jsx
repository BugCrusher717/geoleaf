
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function ConnectWallerPopover() {
  return (
      <IconButton
        sx={{
          width: 150,
          height: 40,
          color: '#fff',
          bgcolor: '#2DA7E6',
          borderRadius: 60
        }}
      >
        <Typography variant="subtitle2" noWrap>
            Connect Wallet
        </Typography>
      </IconButton>
  );
}
