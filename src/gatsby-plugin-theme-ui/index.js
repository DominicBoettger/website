import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

const fonts = {
  serif: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
  sansSerif:  "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

export default {
  ...novelaTheme,
  fonts,
  useColorSchemeMediaQuery: true,
};