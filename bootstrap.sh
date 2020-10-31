#!/usr/bin/env bash

sudo apt-get update

sudo apt-get install build-essential libssl-dev
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh
bash install_nvm.sh
# shellcheck disable=SC1090
source ~/.profile
nvm install 6.0.0
nvm install 14.15.0

sudo npm i
npm i typescript -g
npm i ts-node -g