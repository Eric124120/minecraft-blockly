import React, { useState, useCallback, useEffect } from 'react';
import Blockly from "blockly";
import "./customBlocks/custom_Blocks";
import 'blockly/python';
import 'blockly/javascript';
import './customBlocks/codeGenerator';
import { BlocklyWorkspace } from "react-blockly";
import {INITIAL_XML, INITIAL_TOOLBOX_JSON} from './customBlocks/initContent';
import './App.css';
function App() {
    const [xml, setXml] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');
    
    const workspaceDidChange = useCallback((workspace: any) => {
        try {
            const code = Blockly.JavaScript.workspaceToCode(workspace);
            setJavascriptCode(code);
        } catch (err) {
            console.log(err);
        }
    }, [xml]);

    return (
        <div className="App">
            <BlocklyWorkspace
                toolboxConfiguration={INITIAL_TOOLBOX_JSON}
                initialXml={INITIAL_XML}
                className="fill-height"
                workspaceConfiguration={{
                    grid: {
                    spacing: 20,
                    length: 3,
                    colour: "#ccc",
                    snap: true,
                    },
                }}
                onWorkspaceChange={workspaceDidChange}
                onXmlChange={setXml}
            />
            <pre id="generated-xml">{xml}</pre>
            <textarea
                id="code"
                style={{ height: "200px", width: "400px" }}
                value={javascriptCode}
                readOnly
            ></textarea>
            </div>
    );
}


export default App;
