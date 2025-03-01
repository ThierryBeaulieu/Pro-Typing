import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';
import ProgressionLevels from './ProgressionLevels';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: blue[400],
    },
    secondary: blue,
  },
});

const callToAction = createTheme({
  palette: {
    primary: red,
    secondary: red,
  },
});

const levels = [
  ['50', '52', '55', '58', '50', 'Get Certified'],
  ['60', '62', '65', '68', '70', 'Get Certified'],
  ['70', '72', '75', '78', '80', 'Get Certified'],
  ['80', '82', '85', '88', '90', 'Get Certified'],
  ['90', '92', '95', '98', '100', 'Get Certified'],
  ['100', '102', '105', '108', '110', 'Get Certified'],
  ['110', '112', '115', '118', '120', 'Get Certified'],
  ['120', '122', '125', '128', '130', 'Get Certified'],
  ['130', '132', '135', '138', '140', 'Get Certified'],
];

function ProgressionPage() {
  return (
    <>
      <ProgressionLevels
        theme={defaultTheme}
        actionTheme={callToAction}
        levels={levels}
      />
    </>
  );
}

export default ProgressionPage;
