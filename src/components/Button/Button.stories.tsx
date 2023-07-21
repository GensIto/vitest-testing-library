import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    primary: true,
    label: "Button",
    disabled: true,
  },
};
