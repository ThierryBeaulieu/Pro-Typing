import './Progression.css';
import { createTheme } from '@mui/material/styles';
import { lightBlue, blue, red } from '@mui/material/colors';
import ProgressionLevels from './ProgressionLevels';

const defaultTheme = createTheme({
  palette: {
    primary: lightBlue,
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
  ['50 MPM', '52 MPM', '55 MPM', '58 MPM', '50 MPM', 'Get Certified'],
  ['60 MPM', '62 MPM', '65 MPM', '68 MPM', '70 MPM', 'Get Certified'],
  ['70 MPM', '72 MPM', '75 MPM', '78 MPM', '80 MPM', 'Get Certified'],
  ['80 MPM', '82 MPM', '85 MPM', '88 MPM', '90 MPM', 'Get Certified'],
  ['90 MPM', '92 MPM', '95 MPM', '98 MPM', '100 MPM', 'Get Certified'],
  ['100 MPM', '102 MPM', '105 MPM', '108 MPM', '110 MPM', 'Get Certified'],
  ['110 MPM', '112 MPM', '115 MPM', '118 MPM', '120 MPM', 'Get Certified'],
  ['120 MPM', '122 MPM', '125 MPM', '128 MPM', '130 MPM', 'Get Certified'],
  ['130 MPM', '132 MPM', '135 MPM', '138 MPM', '140 MPM', 'Get Certified'],
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
