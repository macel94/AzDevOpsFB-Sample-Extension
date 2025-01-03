# AzDevOpsFB-Sample-Extension

This project is an Azure DevOps extension developed using Vite and React. It provides two modes: development and production.

## Development Mode

In development mode, you can use Vite's fast refresh and other development features to quickly iterate on your extension.

## Production Mode

In production mode, the extension is optimized and ready for deployment to Azure DevOps.
## Devcontainer

The project includes a devcontainer configuration with everything needed to get started.

### Steps to Generate Certificates

1. install mkcert both on windows and wsl, mkcert -install on windows and copy the root pem files to the wsl pem file localtions(use mkcert -CAROOT to obtain them on both systems), then run mkcert -install on wsl.
2. then you can run package.json script "regenerate-certificates"

Now you are ready to start developing your Azure DevOps extension by pressing f5 in vscode while inside the devcontainer!