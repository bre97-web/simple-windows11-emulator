# Intro

## Dependencies
```
npm i
```

This template provides a preset theme (light and dark), provides a set of preset styles and components based on the Material Design scheme. 

The dependencies of this template include @material/web components, which is the latest MD component library from the Google team.

### About dependencies
If you don't need Material Design 3 components and Material Symbols, uninstall them.
```
npm uninstall @material/web material-symbols
```

If you need to enable the font specified in the style, please use npm to download the following dependencies.
```
npm i @fontsource/roboto
```

If you don't need Pinia and Vue-router, uninstall them.
```
npm uninstall pinia pinia-plugin-persistedstate
```

```
npm uninstall vue-router
```

If you don't need TailwindCSS, uninstall them, then clean `./src/assets/tailwind.css`
```
npm uninstall tailwindcss
```

If you don't need moment, uninstall them.
```
npm uninstall moment
```

If you don't need Lit and tslib, uninstall them.
```
npm uninstall lit tslib
```

If you don't need HeadlessUI, uninstall them.
```
npm uninstall @headlessui/vue
```

## Start a local server
Start Vite local server in [http://localhost:5173](http://localhost:5173) (default port is 5173)
```
npm run dev
```

## Build
build ./src/**/*.vue to ./docs/
```
npm run build
```

## Github Action Workflows
Save the files if you need.

### commitlint
commitlint is on pull request.

### firebase
Required:
+ Register **[Google Cloud](https://console.cloud.google.com)** and **[Firebase](https://console.firebase.google.com)**, then **[Create a project](https://console.cloud.google.com/projectcreate)**
+ Repo Settings: Actions
  + Workflow permissions
    + **Read and write** permissions
+ Repo Settings: Actions secrets and variables
  + **FIREBASE_SERVICE_ACCOUNT**
+ **Edit ./firebaserc**

#### firebase-hosting-merge
The action is on merge.

#### firebase-hosting-pull-request
The action is on pull request.

###  publish-package
Required:
+ Register **NPM** and **Github**
+ Repo Settings: Actions secrets and variables
  + **PUBLISH_NPM_TOKEN**
+ **Edit publish.config.js**

### build-to-pages
The action is on merge.

Required:
+ npm run build
+ no warning and error in type-check

### type-check-pull-request
The action is on pull request.