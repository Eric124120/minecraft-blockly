import JSZip from "jszip";
import { message } from "antd";

export const downloadFile = (path: string) => {
    const linkInstance = document.createElement("a");
    // 去除http前缀
    path = path.replace(/^http(s){0,1}:/, "");
    linkInstance.setAttribute("href", path);
    linkInstance.style.display = "none";
    document.body.appendChild(linkInstance);
    linkInstance.click();
    setTimeout(() => {
        linkInstance.remove();
    }, 300);
};

export const downloadFileByContext = (content: Blob, fileName: string) => {
    const linkInstance = document.createElement("a");
    const url = window.URL.createObjectURL(content);
    linkInstance.setAttribute("href", url);
    linkInstance.setAttribute("download", fileName);
    linkInstance.style.display = "none";
    document.body.appendChild(linkInstance);
    linkInstance.click();
    setTimeout(() => {
        linkInstance.remove();
    }, 300);
};

export const savaProject = (xmlCode: string, javascriptCode: string) => {
    console.log("save", xmlCode, javascriptCode);
    const zip = new JSZip();
    zip.file("project.xml", xmlCode);
    zip.file("project.js", javascriptCode);
    zip.generateAsync({ type: "blob" }).then((content: Blob) => {
        downloadFileByContext(content, "project.zip");
    });
};

export const loadProjectXmlAsync = async (content: Blob) => {
    try {
        const zip = new JSZip();
        const data = await zip.loadAsync(content);
        const xmlFile = data.files["project.xml"];
        const xmlStr = await xmlFile.async("text");
        message.success("导入成功");
        return xmlStr;
    } catch (err) {
        message.error("导入失败");
        throw Error("加载失败");
    }
};
