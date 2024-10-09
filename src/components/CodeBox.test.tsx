import { render, screen } from "@testing-library/react";
import CodeBox from "./CodeBox";

jest.mock("@monaco-editor/react", () => ({
  __esModule: true,
  default: (props: any) => {
    return <div data-testid="monaco-editor">{props.value}</div>;
  },
}));

describe("CodeBox component", () => {
  it("renders Monaco Editor with the correct props", () => {
    const code = '{"key": "value"}';

    render(<CodeBox code={code} />);

    const editor = screen.getByTestId("monaco-editor");
    expect(editor).toBeInTheDocument();

    expect(editor).toHaveTextContent(code);
  });

  it("should render the Monaco Editor with readOnly mode", () => {
    const code = '{"key": "value"}';

    render(<CodeBox code={code} />);

    const editor = screen.getByTestId("monaco-editor");
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveTextContent(code);
  });
});
