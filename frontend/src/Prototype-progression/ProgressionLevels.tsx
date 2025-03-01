import './Progression.css';
import { ThemeProvider, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface ProgressionLevelsProps {
  theme: Theme; // MUI theme type
  actionTheme: Theme;
  levels: string[][]; // Array of strings
}

function ProgressionLevels({
  theme,
  actionTheme,
  levels,
}: ProgressionLevelsProps) {
  return (
    <>
      {levels.map((certification: string[]) => (
        <div className="line-level">
          {certification.map((level: string, index: number) => (
            <div className="arrow-and-box">
              <ThemeProvider
                theme={index !== certification.length - 1 ? theme : actionTheme}
              >
                <Button
                  sx={{
                    width: 100,
                    height: 50,
                    color: 'palette.primary.light',
                  }}
                  variant="contained"
                >
                  {level}
                </Button>
              </ThemeProvider>
              {index !== certification.length - 1 && (
                <img
                  className="arrow"
                  src="../src/assets/arrow-pointing-to-right-white.png"
                  alt="arrow"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ProgressionLevels;
