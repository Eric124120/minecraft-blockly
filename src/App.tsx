import React, { useState, useCallback } from "react";
import Blockly from "blockly";
import "./libs/customBlocks/custom_Blocks";
import "blockly/python";
import "blockly/javascript";
import "./libs/customBlocks/codeGenerator";
import { BlocklyWorkspace } from "react-blockly";
import {
    INITIAL_XML,
    INITIAL_TOOLBOX_JSON,
} from "./libs/customBlocks/initContent";
import "./App.css";

function App() {
    const [xml, setXml] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");

    const workspaceDidChange = useCallback((workspace: any) => {
        try {
            const code = Blockly.JavaScript.workspaceToCode(workspace);
            setJavascriptCode(code);
        } catch (err) {
            console.log(err);
        }
    }, []);

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
            <pre className="prettyprint">
                <code>{xml}</code>
            </pre>
            <pre className="prettyprint">
                <code className="language-javascript">{javascriptCode}</code>
            </pre>
        </div>
    );
}

export default App;
