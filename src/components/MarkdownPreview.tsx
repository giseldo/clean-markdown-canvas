
import { useEffect, useState } from "react";
import { marked } from "marked";
import "highlight.js/styles/github.css";

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview = ({ markdown }: MarkdownPreviewProps) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        // Configure marked with options
        marked.setOptions({
          breaks: true,
          gfm: true,
        });

        const htmlContent = await marked(markdown);
        setHtml(htmlContent);
      } catch (error) {
        console.error("Error converting markdown:", error);
        setHtml("<p>Error rendering markdown</p>");
      }
    };

    convertMarkdown();
  }, [markdown]);

  return (
    <div className="p-6 bg-white h-full overflow-auto">
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:text-gray-600"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownPreview;
