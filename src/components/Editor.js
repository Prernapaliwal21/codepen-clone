import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

const Editor = ({ displayName, language, value, onChange }) => {
    const [open, setOpen] = useState(true)
    return (
        <div className={`editor-container${open ? '' : ' collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button onClick={() => setOpen(prevOpen => !prevOpen)} type="button" className="collapse-expand-btn">
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <Controlled
                className="codemirror-wrapper"
                value={value}
                onBeforeChange={(editor, data, value) => onChange(value)}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </div>
    )
}

export default Editor