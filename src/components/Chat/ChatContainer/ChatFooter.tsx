import { Typography } from '@/components'
import React from 'react'

export default function ChatFooter() {
  return (
    <>
      <Typography className="text-xs font-light text-gray-mid mt-5">
        Please use natural language to interact with{' '}
        <span className="text-black font-bold">Accel</span>
        <span className="text-orange-primary font-bold">One </span>
        <span className="text-black font-bold">AI</span>. It understands and
        responds best to human-like conversation.
      </Typography>
    </>
  )
}
