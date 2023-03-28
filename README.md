# BBT CMS Front-End

## Front-End Tech Stack:

- Yarn
- Next.js
- TypeScript
- MUI + Styled Components
- Redux-Toolkit
- Cypress
- Husky

# 1. Node.js

Please install the latest stable version of Node.js from [this](https://nodejs.org/en/download/) link.

---

# 2. yarn

After you've installed the Node.js, please run `npm install --global yarn` to install the yarn **package manager**.

---

# 3. Visual Studio Code

Please install the VS Code from the [this](https://code.visualstudio.com/download) link.

## i. Extensions

Please install the following extensions.

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

> Note: **Please DO NOT use package managers other than yarn! DO NOT use npm, pnpm etc.**
> 

You can bootstrap project with: 

```jsx
yarn dev // and type http://localhost:3000 from your browser
```

You can build the project with:

```jsx
yarn build
```

To start the ‘**builded**’ project:

```jsx
yarn start // and type http://localhost:3000 from your browser
```

## Folder Structure:
```
.
├── public
└── src/
    ├── modules/
    │   ├── common/
    │   │   ├── assets
    │   │   ├── components
    │   │   ├── icons
    │   │   ├── layouts
    │   │   ├── providers
    │   │   └── types
    │   ├── core/
    │   │   ├── hooks
    │   │   ├── lib
    │   │   ├── redux
    │   │   └── utils
    │   ├── maps/
    │   │   ├── assets
    │   │   ├── components
    │   │   ├── hooks
    │   │   ├── icons
    │   │   ├── providers
    │   │   ├── redux
    │   │   ├── types
    │   │   └── utils
    │   └── locations/
    │       ├── assets
    │       ├── components
    │       ├── icons
    │       ├── redux
    │       ├── types
    │       └── utils
    ├── styles
    └── pages
```
