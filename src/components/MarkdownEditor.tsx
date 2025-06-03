
import { useState } from "react";
import EditorToolbar from "./EditorToolbar";
import MarkdownPreview from "./MarkdownPreview";
import { Button } from "@/components/ui/button";
import { Eye, Edit3, Split } from "lucide-react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(`# Bem-vindo ao Editor de Markdown

Este é um **editor de markdown** com preview em tempo real.

## Recursos

- **Negrito** e *itálico*
- Listas numeradas e com marcadores
- Blocos de código
- Links e muito mais!

### Lista de exemplo:
1. Primeiro item
2. Segundo item
3. Terceiro item

### Lista com marcadores:
- Item A
- Item B
- Item C

\`\`\`javascript
function helloWorld() {
  console.log("Hello, World!");
}
\`\`\`

> Esta é uma citação de exemplo.

[Link para o Lovable](https://lovable.dev)
`);

  const [viewMode, setViewMode] = useState<'split' | 'edit' | 'preview'>('split');

  const handleMarkdownChange = (newMarkdown: string) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Editor de Markdown</h1>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'edit' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('edit')}
              className="gap-2"
            >
              <Edit3 size={16} />
              Editar
            </Button>
            <Button
              variant={viewMode === 'split' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('split')}
              className="gap-2"
            >
              <Split size={16} />
              Dividir
            </Button>
            <Button
              variant={viewMode === 'preview' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('preview')}
              className="gap-2"
            >
              <Eye size={16} />
              Preview
            </Button>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      {(viewMode === 'edit' || viewMode === 'split') && (
        <EditorToolbar markdown={markdown} onMarkdownChange={handleMarkdownChange} />
      )}

      {/* Editor Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Panel */}
        {(viewMode === 'edit' || viewMode === 'split') && (
          <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} border-r border-gray-200`}>
            <textarea
              value={markdown}
              onChange={(e) => handleMarkdownChange(e.target.value)}
              className="w-full h-full p-6 text-gray-900 placeholder-gray-500 resize-none focus:outline-none font-mono text-sm leading-relaxed"
              placeholder="Digite seu markdown aqui..."
              spellCheck={false}
            />
          </div>
        )}

        {/* Preview Panel */}
        {(viewMode === 'preview' || viewMode === 'split') && (
          <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} overflow-auto`}>
            <MarkdownPreview markdown={markdown} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
