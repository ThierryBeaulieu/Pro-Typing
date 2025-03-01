import { ThemeProvider, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleClick = (level: string) => {
    navigate(`/typing/${level}`);
  };

  return (
    <>
      {levels.map((certification: string[], certificationKey: number) => (
        <div className="line-level" key={certificationKey}>
          {certification.map((level: string, index: number) => (
            <div className="arrow-and-box" key={index}>
              <ThemeProvider
                theme={index !== certification.length - 1 ? theme : actionTheme}
              >
                <Button
                  sx={{
                    width: 100,
                    height: 50,
                  }}
                  variant="contained"
                  onClick={() => handleClick(level)}
                >
                  {index !== certification.length - 1 ? level + ' WPM' : level}
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
