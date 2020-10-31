FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set debconf to run non-interactively
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base dependencies
RUN apt-get update && apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        wget \
    && rm -rf /var/lib/apt/lists/*

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 14.15.0

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.20.0/install.sh | bash
RUN ls $NVM_DIR -a
RUN chmod u+x $NVM_DIR/nvm.sh
RUN . $NVM_DIR/nvm.sh
RUN $NVM_DIR/nvm.sh install $NODE_VERSION
RUN $NVM_DIR/nvm.sh alias default $NODE_VERSION
RUN $NVM_DIR/nvm.sh use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH


RUN node -v
RUN npm ci

COPY . /usr/src/app

ENV PORT 9000
EXPOSE $PORT

CMD [ "npm", "start" ]