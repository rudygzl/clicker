# Clicker (Vanilla JS Idle Game)

## This is a free open-source vanilla javascript idle game and using TailwindCSS Framework

```diff
- You can use this project to edit and make your own idle game by using the engine. TailwindCSS Framework part is optional).
```

### If you want to edit TailwindCSS in this project :

- Clone the git file
- Open VSCODE with my file
- Open a vscode terminal
- Type `npm init -y` to initialize the package.json that will help execute the script to build TAILWINDCSS everytime you use advanced customization
- In "**scripts**" section in the **package.json** file, replace the "test" line by = `"build:css": "tailwind build src/style.css -o dist/style.css"` (including double quotes)
- Type `npm install tailwindcss` if you want the build script to work (that will install all tailwindcss node modules)
- Type `npm run build:css` to update changes

### That should be it! Don't forget to type

`npm run build:css`

### after some customizations in the **tailwind.config.js** or **@apply customs** in **src/style.css** stylesheet.
