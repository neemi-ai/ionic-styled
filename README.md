# ionic-styled
Styled component library for ionic. This is a work in progress, if you like the idea and want to help out, please do!

The goal of this repository is to completely remove the need to remember ionic custom style properties. 
This library will provide a styled component for every ionic component, and will provide a way to override the default 
styles. So instead of writing css like `--background: red`, you can write `<SomeComponent background="red" />` and 
the library will do the appropriate conversions.

## Installation

```bash
npm install ionic-styled
```

## Contributing

### Running storybook

```bash
npm run storybook
```