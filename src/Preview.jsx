import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function Preview(props) {
  return (
    <div id="preview">
      <ReactMarkdown
        id="preview"
        breaks={true}
        children={props.markdown}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  )
}

export default Preview
