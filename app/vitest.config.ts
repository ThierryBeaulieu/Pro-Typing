import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        '**.config.**',
        'src/interfaces/**',
        'src/utils/**',
        'src/enum/**',
        'dist/**',
        'src/main.tsx',
        'src/app.tsx',
        'src/vite-env.d.ts',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
