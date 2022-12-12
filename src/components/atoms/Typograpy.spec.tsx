import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";

describe("타이포그라피 테스트", () => {
  test("텍스트를 포함해야한다.", () => {
    const Text = "ㅇㅁㅇㄴㄴ";
    render(<Typography>{Text}</Typography>);

    expect(screen.getByText(Text));
  });
});
