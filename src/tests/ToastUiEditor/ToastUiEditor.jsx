import '@toast-ui/editor/dist/toastui-editor.css';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import {Editor} from '@toast-ui/react-editor';
import {useRef, useState} from 'react';
import styled from 'styled-components';

const ToastUiEditor = () => {
  const [result, setResult] = useState('');

  const editorRef = useRef();

  return (
    <Section>
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        height="400px"
        plugins={[colorSyntax]}
        // initialEditType="markdown"
        initialEditType="wysiwyg"
        // useCommandShortcut={true}
        useCommandShortcut={false}
        // language="ko-KR"
        // hooks={{
        //   addImageBlobHook: onUploadImage,
        // }}
      />

      <button
        onClick={() => {
          setResult(editorRef.current?.getInstance().getHTML());
        }}>
        클릭해보기
      </button>

      <span>{result}</span>
    </Section>
  );
};
export default ToastUiEditor;

const Section = styled.section`
  width: 80%;
  margin-left: 60px;
  border: 1px solid black;
`;
