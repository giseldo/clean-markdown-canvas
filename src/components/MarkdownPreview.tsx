
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
        className="prose prose-lg max-w-none
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-0
          prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-6
          prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-em:text-gray-700 prose-em:italic
          prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
          prose-li:mb-1 prose-li:text-gray-700
          prose-hr:border-gray-300 prose-hr:my-8
          prose-table:border-collapse prose-table:w-full
          prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-th:text-left
          prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownPreview;
