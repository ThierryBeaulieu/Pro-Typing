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
  ['50', '52', '55', '58', '60'],
  ['60', '62', '65', '68', '70'],
  ['70', '72', '75', '78', '80'],
  ['80', '82', '85', '88', '90'],
  ['90', '92', '95', '98', '100'],
  ['100', '102', '105', '108', '110'],
  ['110', '112', '115', '118', '120'],
  ['120', '122', '125', '128', '130'],
  ['130', '132', '135', '138', '140'],
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
