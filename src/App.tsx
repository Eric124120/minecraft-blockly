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
import constantAppTabPane from "./libs/constants/appTabPane";
import { savaProject, loadProjectXmlAsync } from "./libs/helpers/project";
import "antd/dist/antd.css";
import "./App.css";

const { TabPane } = Tabs;

function App() {
    const [xml, setXml] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");
    const workspaceInstance = useRef(null);

    const getJavaScriptCode = () => {
        if (!workspaceInstance.current) return javascriptCode;
        const code = Blockly.JavaScript.workspaceToCode(
            workspaceInstance.current
        );
        return code;
    };

    const workspaceDidChange = useCallback((workspace: any) => {
        try {
            // workspace change handle
        } catch (err) {
            console.log(err);
        }
    }, []);

    const selectTabHandle = (key: string) => {
        switch (key) {
            case constantAppTabPane.XML: {
                console.log(key);
                break;
            }
            case constantAppTabPane.Blockly: {
                console.log(key);
                break;
            }
            case constantAppTabPane.JavaScript: {
                const jsCode = getJavaScriptCode();
                setJavascriptCode(jsCode);
                break;
            }
            default: {
                break;
            }
        }
    };

    const saveProjectClick = () => {
        const jsCode = getJavaScriptCode();
        setJavascriptCode(jsCode);
        savaProject(xml, jsCode);
    };

    const loadProjectHandle = useCallback(async (content: Blob) => {
        const projectXml = await loadProjectXmlAsync(content);
        setXml(xmlFormatter(projectXml));
        if (workspaceInstance.current) {
            const xmlDom = Blockly.Xml.textToDom(projectXml);
            Blockly.Xml.domToWorkspace(xmlDom, workspaceInstance.current);
        }
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
                <Upload
                    showUploadList={false}
                    accept=".zip"
                    beforeUpload={loadProjectHandle}
                >
                    <Button type="primary">load project</Button>
                </Upload>
                <Button type="primary" onClick={saveProjectClick}>
                    save
                </Button>
            </div>
            <Tabs
                defaultActiveKey={constantAppTabPane.Blockly}
                onChange={selectTabHandle}
            >
                <TabPane
                    tab={constantAppTabPane.Blockly}
                    key={constantAppTabPane.Blockly}
                >
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
                            scrollbars: true,
                        }}
                        onWorkspaceChange={workspaceDidChange}
                        onXmlChange={xmlChangeHandle}
                        onInject={injectHandle}
                    />
                </TabPane>
                <TabPane
                    tab={constantAppTabPane.JavaScript}
                    key={constantAppTabPane.JavaScript}
                >
                    <pre className="prettyprint">{javascriptCode}</pre>
                </TabPane>
                <TabPane
                    tab={constantAppTabPane.XML}
                    key={constantAppTabPane.XML}
                >
                    <pre className="prettyprint">{xml}</pre>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default App;
