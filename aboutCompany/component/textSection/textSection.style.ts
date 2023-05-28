import { Box, styled } from '@mui/material';

export const AboutTextSectionLeft = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.primary.light,
  borderStryle: 'solid',
  borderWidth: '1px',
  borderColor: theme.palette.border.main,
  padding: theme.spacing(5, 4, 5, 10),
  maxHeight: '455px',
  marginTop: theme.spacing(7.5),

  [theme.breakpoints.down('lg')]: {
    maxHeight: 'inherit',
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(0),
    border: '0',
    padding: theme.spacing(3, 2),
  },
}));

export const AboutContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderBottom: `solid 1px ${theme.palette.border.light}`,
  paddingBottom: theme.spacing(4),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(0),
    border: '0',
  },

  '&:last-child': {
    borderBottom: 0,
  },
}));
