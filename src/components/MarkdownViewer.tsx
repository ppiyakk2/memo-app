'use client'

import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import { Memo } from '@/types/memo'

interface MarkdownViewerProps {
  memo: Memo
  className?: string
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ memo, className = '' }) => {
  if (!memo.isMarkdown) {
    return (
      <div className={`prose max-w-none ${className}`}>
        <div className="whitespace-pre-wrap text-gray-700">{memo.content}</div>
      </div>
    )
  }

  return (
    <div className={`markdown-viewer ${className}`} data-color-mode="light">
      <MDEditor.Markdown 
        source={memo.content} 
        style={{ 
          backgroundColor: 'transparent',
          color: 'inherit'
        }}
      />
    </div>
  )
}

export default MarkdownViewer 