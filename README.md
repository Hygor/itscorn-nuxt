# :corn:
# itscorn-nuxt
It has the Nuxt! I can't imagine a more beautiful thing (=

![itscorn-nuxt](https://user-images.githubusercontent.com/236071/192311529-536eb791-bb43-4919-b4f5-444605385403.png)

this is a non-project using Nuxt 3 to demonstrate how 

## How to Setup?

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

## Language Support

This template uses an automated way to translate strings using Google translate. To add a new language, create a new file named with the ISO country code in the `locales` directory and add the strings on the main `en.yml` file. 

After that all the strings will be translated automatically running the command:

```bash
yarn generate:locales
```

Or you using `npm` or `pnpm` as well.