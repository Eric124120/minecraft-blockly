import React, { useState, useCallback, useRef } from "react";
import { Tabs, Button, Upload } from "antd";
import Blockly from "blockly";
import "./libs/customBlocks/custom_Blocks";
import "blockly/python";
import "blockly/javascript";
import "./libs/customBlocks/codeGenerator";
import { BlocklyWorkspace } from "react-blockly";
import xmlFormatter from "xml-formatter";
import {
    INITIAL_XML,
    INITIAL_TOOLBOX_JSON,
    MEDIA_PATH,
} from "./libs/customBlocks/initContent";

import { savaProject, loadProjectXmlAsync } from "./libs/helpers/project";
import "antd/dist/antd.css";
import "./App.css";

const { TabPane } = Tabs;

function App() {
    const [xml, setXml] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");
    const workspaceInstance = useRef(null);

    const workspaceDidChange = useCallback((workspace: any) => {
        try {
            const code = Blockly.JavaScript.workspaceToCode(workspace);
            setJavascriptCode(code);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const selectTabHandle = useCallback((key: string) => {
        console.log(key);
    }, []);

    const saveProjectClick = useCallback(() => {
        savaProject(xml, javascriptCode);
    }, [xml, javascriptCode]);

    const loadProjectHandle = useCallback(async (content: Blob) => {
        const projectXml = await loadProjectXmlAsync(content);
        console.log(workspaceInstance.current);
    }, []);

    const injectHandle = useCallback((workspace: any) => {
        workspaceInstance.current = workspace;
    }, []);

    const xmlChangeHandle = (str: string) => {
        setXml(xmlFormatter(str));
    };

    return (
        <div className="app-container">
            <div className="action-container">
                <Upload accept=".zip" beforeUpload={loadProjectHandle}>
                    <Button type="primary">load project</Button>
                </Upload>
                <Button type="primary" onClick={saveProjectClick}>
                    save
                </Button>
            </div>
            <Tabs defaultActiveKey="1" onChange={selectTabHandle}>
                <TabPane tab="Blockly" key="1">
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
                            zoom: {
                                controls: true,
                                wheel: true,
                                startScale: 1.0,
                                maxScale: 2,
                                minScale: 0.5,
                                scaleSpeed: 1.2,
                            },
                            media: MEDIA_PATH,
                            trashcan: true,
                        }}
                        onWorkspaceChange={workspaceDidChange}
                        onXmlChange={xmlChangeHandle}
                        onInject={injectHandle}
                    />
                </TabPane>
                <TabPane tab="JavaScript" key="2">
                    <pre className="prettyprint">{javascriptCode}</pre>
                </TabPane>
                <TabPane tab="Xml" key="3">
                    <pre className="prettyprint">{xml}</pre>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default App;
