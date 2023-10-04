import { log } from "node:console";
import fs from "node:fs";
import path from "node:path";

type Project = {
    type: string;
    rootFile: string;
    versions: number[];
    default: number;
};

const projectFiles: Project[] = [
    {
        type: "java",
        rootFile: "pom.xml",
        versions: [8, 11, 17, 21],
        default: 8,
    }, 
    {
        type: "python",
        rootFile: "requirements.txt",
        versions: [2, 3],
        default: 3,
    }, 
    {
        type: "node",
        rootFile: "package.json",
        versions: [16, 18, 20],
        default: 16,
    }
];

export const getProjectType = (projectPath: string): Project | null => {
    const p = path.resolve(`${__dirname}/../${projectPath}`);

    if (!fs.existsSync(p) || projectPath === "") {
        return null;
    }

    const files = fs.readdirSync(p);
    
    for (const file of files) {
        const currentEl = projectFiles.filter(f => f.rootFile === file);
        if (currentEl.length != 0) {
            return currentEl[0];
        }
    }
    
    return null;
};