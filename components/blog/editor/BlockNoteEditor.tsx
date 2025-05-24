"use client";

import { PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { codeBlock } from "@blocknote/code-block";
import { useEdgeStore } from "@/lib/edgestore";

import "@blocknote/mantine/style.css";
import "./editor.css";

interface BlockNoteEditorProps {
  onChange?: (content: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const BlockNoteEditor = ({
  initialContent,
  editable,
  onChange,
}: BlockNoteEditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleImgUploads = async (file: File) => {
    const res = await edgestore.publicFiles.upload({ file });

    return res.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    codeBlock,
    uploadFile: handleImgUploads,
  });

  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme == "dark" ? "dark" : "light"}
      onChange={
        onChange
          ? () => {
              onChange(JSON.stringify(editor.document));
            }
          : () => {}
      }
      editable={editable}
    />
  );
};

export default BlockNoteEditor;
