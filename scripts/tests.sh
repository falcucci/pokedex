#!/bin/bash

if [[ `command -v fzf` ]]; then
  ./node_modules/.bin/mocha $(fzf --filter=__tests__/) --file ./__tests__/config/mocha-setup.js -R spec --exit
else
  ./node_modules/.bin/mocha '__tests__/*' --file ./__tests__/config/mocha-setup.js -R spec --exit
fi
