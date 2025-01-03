# AzDevOpsFB-Sample-Extension

This project is an Azure DevOps extension developed using Vite and React. It provides two modes: development and production.

## Development Mode

In development mode, you can use Vite's fast refresh and other development features to quickly iterate on your extension.

## Production Mode

In production mode, the extension is optimized and ready for deployment to Azure DevOps.
## Devcontainer

The project includes a devcontainer configuration with everything needed to get started.

### Steps to Generate Certificates
https://saranga.dev/setting-up-self-signed-ssl-certificates-for-local-development-in-wsl2-2cfb121714be
1. install mkcert both on windows and wsl, mkcert -install on windows and copy the root pem files to the wsl pem file localtions(use mkcert -CAROOT to obtain them on both systems), then run mkcert -install on wsl.
2. then you can run package.json script "regenerate-certificates"

Now you are ready to start developing your Azure DevOps extension by pressing f5 in vscode while inside the devcontainer!



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
