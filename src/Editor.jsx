import React, { useState } from "react"

function Editor(props) {
  return (
    <div id="editor-container">
      <textarea
        id="editor"
        value={props.markdown}
        placeholder="Enter your markdown here!"
        name="markdown"
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Editor
