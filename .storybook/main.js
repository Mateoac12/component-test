module.exports = {
  "stories": [
    "../src/@(atoms|molecules)/**/*.stories.mdx",
    "../src/@(atoms|molecules)/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-css-modules-preset'
  ],
  "framework": "@storybook/react"
}