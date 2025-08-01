'use client'

import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { MemoFormData } from '@/types/memo'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  height?: number
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  value,
  onChange,
  placeholder = '마크다운으로 메모를 작성하세요...',
  className = '',
  height = 300
}) => {
  const [content, setContent] = useState(value)

  useEffect(() => {
    setContent(value)
  }, [value])

  const handleChange = (val: string | undefined) => {
    const newValue = val || ''
    setContent(newValue)
    onChange(newValue)
  }

  return (
    <div className={`markdown-editor ${className}`} data-color-mode="light">
      <MDEditor
        value={content}
        onChange={handleChange}
        placeholder={placeholder}
        height={height}
        preview="live"
        hideToolbar={false}
        textareaProps={{
          placeholder: placeholder,
        }}
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
        }}
      />
    </div>
  )
}

export default MarkdownEditor 