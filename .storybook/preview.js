/** @type { import('@storybook/react').Preview } */


import '../src/scss/main.scss'
import '../src/scss/typography.scss';
import '../src/index.css';


const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
