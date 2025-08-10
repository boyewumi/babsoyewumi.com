// app/storybook/page.tsx
'use client'
import { useEffect } from 'react'

export default function StorybookPage() {
  useEffect(() => {
    // This avoids iframe issues entirely
    window.location.href = '/storybook/index.html'
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Loading Storybook...</p>
    </div>
  )
}
