import Editor from "@monaco-editor/react";

interface CodeBoxProps {
  code: string;
}

function CodeBox({ code }: CodeBoxProps) {
  return (
    <div>
      <Editor
        height="500px"
        language="json"
        theme="vs-dark"
        value={code}
        data-testid="monaco-editor"
        options={{
          readOnly: true
        }}
      />
    </div>
  );
}

export default CodeBox;
