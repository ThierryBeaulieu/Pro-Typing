#!/bin/bash

# Define your environment variables here
export TEST_ENV=1

gotest() {
  go test "$@" | sed -e "s/PASS/$(printf "\033[32mPASS\033[0m")/g" \
                     -e "s/FAIL/$(printf "\033[31mFAIL\033[0m")/g" \
                     | GREP_COLOR="01;33" egrep --color=always '\s*[a-zA-Z0-9\-_.]+[:][0-9]+[:]|^'
}

# If the script is executed directly, run gotest with provided arguments
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    gotest "$@"
fi