import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

const { Default, Disabled } = composeStories(stories);

test("renders default button correctly", () => {
  const { getByRole } = render(<Default />);
  const button = getByRole("button", { name: "Button" });
  expect(button).not.toBeNull();
  expect(button.getAttribute("disabled")).toBeNull();
  expect(button).toBeVisible();
  expect(button).toBeEnabled();
  expect(button).toBeInTheDocument();
});

test("renders disabled button correctly", () => {
  const { getByRole } = render(<Disabled />);
  const button = getByRole("button", { name: "Button" });
  expect(button.getAttribute("disabled")).toBe("");
});
