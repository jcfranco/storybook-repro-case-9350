import { addParameters, configure } from "@storybook/html";
import { DocsContainer, DocsPage } from "@storybook/addon-docs/dist/blocks";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  }
});

configure(require.context("../src", true, /\.stories\.ts$/), module);
