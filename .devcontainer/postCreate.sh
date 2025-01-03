#!/bin/bash

yarn install 
bash -c 'yarn global add tfx-cli'

# Run brew install with error handling and capture output
brew install mkcert

# Run 'yarn run regenerate-certificates' regardless of mkcert installation success
yarn run regenerate-certificates