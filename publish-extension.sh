#!/bin/bash

# Extract the version from vss-extension.json
VERSION=$(jq -r '.version' vss-extension.json)

# Increment the version (this assumes a simple X.Y.Z format)
INCREMENTED_VERSION=$(echo "$VERSION" | awk -F. '{print $1"."$2"."($3+1)}')

# Construct the base path
BASE_PATH="/_apis/public/gallery/publisher/Wuerth-Phoenix/extension/azure-devops-extension-tsx/$INCREMENTED_VERSION/assetbyname/dist/"

# Build the Vite project with the dynamic base path
tsc -b && vite build --base "$BASE_PATH" && tfx extension create --manifest-globs vss-extension.json --rev-version