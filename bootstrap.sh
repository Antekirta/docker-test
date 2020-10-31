#!/usr/bin/env bash

sudo apt-get update

sudo apt install build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
nvm install 14

sudo npm i
npm i typescript -g
npm i ts-node -g