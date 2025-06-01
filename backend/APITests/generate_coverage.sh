#!/bin/bash

#!/bin/bash

set -e

echo "🧹 Cleaning old test results and reports..."
rm -rf TestResults
rm -rf coverage-report

echo "🧪 Running tests with coverage collection..."
dotnet test --collect:"XPlat Code Coverage"

echo "📦 Finding latest coverage file..."
coverage_file=$(find . -type f -path "*/TestResults/*/coverage.cobertura.xml" | head -n 1)

if [ -z "$coverage_file" ]; then
  echo "❌ Coverage file not found."
  exit 1
fi

echo "📊 Generating coverage report..."
reportgenerator -reports:"$coverage_file" -targetdir:"coverage-report"

echo "🌐 Opening coverage report in browser..."
open coverage-report/index.html
