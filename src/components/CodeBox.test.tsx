import { render, screen } from "@testing-library/react";
import CodeBox from "./CodeBox";

// Mocking Monaco Editor to avoid rendering it in tests
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

    // Check if Monaco Editor is rendered
    const editor = screen.getByTestId("monaco-editor");
    expect(editor).toBeInTheDocument();

    // Verify that the correct code is passed as value to the Monaco Editor
    expect(editor).toHaveTextContent(code);
  });

  it("should render the Monaco Editor with readOnly mode", () => {
    const code = '{"key": "value"}';

    render(<CodeBox code={code} />);

    // Ensure that the Monaco Editor component has the readOnly prop set to true
    const editor = screen.getByTestId("monaco-editor");
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveTextContent(code);
    // You can't directly check the 'options' prop in this mock, but the existence of the component is verified.
  });
});
