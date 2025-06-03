
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Code, 
  Link,
  Heading1,
  Heading2,
  Heading3
} from "lucide-react";

interface EditorToolbarProps {
  markdown: string;
  onMarkdownChange: (markdown: string) => void;
}

const EditorToolbar = ({ markdown, onMarkdownChange }: EditorToolbarProps) => {
  const insertText = (before: string, after: string = '') => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    
    const newText = markdown.substring(0, start) + before + selectedText + after + markdown.substring(end);
    onMarkdownChange(newText);
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const insertAtLineStart = (prefix: string) => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const lines = markdown.split('\n');
    const currentLineIndex = markdown.substring(0, start).split('\n').length - 1;
    
    lines[currentLineIndex] = prefix + lines[currentLineIndex];
    onMarkdownChange(lines.join('\n'));
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length);
    }, 0);
  };

  return (
    <div className="border-b border-gray-200 px-6 py-3 bg-gray-50">
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertAtLineStart('# ')}
          className="gap-2"
        >
          <Heading1 size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertAtLineStart('## ')}
          className="gap-2"
        >
          <Heading2 size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertAtLineStart('### ')}
          className="gap-2"
        >
          <Heading3 size={16} />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-2" />
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertText('**', '**')}
          className="gap-2"
        >
          <Bold size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertText('*', '*')}
          className="gap-2"
        >
          <Italic size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertText('`', '`')}
          className="gap-2"
        >
          <Code size={16} />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-2" />
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertAtLineStart('- ')}
          className="gap-2"
        >
          <List size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertAtLineStart('1. ')}
          className="gap-2"
        >
          <ListOrdered size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertAtLineStart('> ')}
          className="gap-2"
        >
          <Quote size={16} />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-2" />
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertText('[texto do link](', ')')}
          className="gap-2"
        >
          <Link size={16} />
        </Button>
      </div>
    </div>
  );
};

export default EditorToolbar;
