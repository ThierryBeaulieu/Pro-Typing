#!/bin/bash

# Define your environment variables here
export TEST_ENV=1

# Define color codes for readability
COLOR_RESET="\033[0m"
COLOR_CYAN="\033[1;36m"
COLOR_BLUE="\033[1;34m"
COLOR_GREEN="\033[32m"
COLOR_RED="\033[31m"
COLOR_YELLOW="\033[1;33m"
COLOR_BRIGHT_GREEN="\033[1;32m"

# Define test symbols
PASS_SYMBOL="✔"
FAIL_SYMBOL="✘"
ALL_TESTS_PASSED="✅ ALL TESTS PASSED"
TESTS_FAILED="❌ TESTS FAILED"

gotest() {
  go test "$@" | sed -e "s/PASS/$(printf "${COLOR_GREEN}PASS${COLOR_RESET}")/g" \
                     -e "s/FAIL/$(printf "${COLOR_RED}FAIL${COLOR_RESET}")/g" \
                     -e "s/RUN/$(printf "${COLOR_CYAN}RUN${COLOR_RESET}")/g" \
                     | GREP_COLOR="01;33" egrep --color=always '\s*[a-zA-Z0-9\-_.]+[:][0-9]+[:]|^'
}

# If the script is executed directly, run gotest with provided arguments
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    gotest "$@"
fi