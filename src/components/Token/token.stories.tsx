import { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import theme from "../../global/theme";
import { withRouter } from "storybook-addon-react-router-v6";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { Token } from "./index";

export default {
  title: "Components/Token",
  decorators: [withRouter, withThemesProvider([theme])],
  component: Token,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphonex",
    },
  },
} as Meta;

export const Default: StoryObj = {};
