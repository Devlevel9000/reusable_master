import { SemVer } from "semver";
import fs from "node:fs";
import path, { ParsedPath } from "node:path";

const REPO = "../app";

type Project = {
    type: string;
    rootFile: string;
    versions: number[];
};

const javaVersionFromPom = function(path: ParsedPath) {
    // read pom.xml and return the java version
    // we default to 8 as it's the most common
    return 8;
};

const main = function() {
    const projectFiles: Project[] = [
        {
            type: "java",
            rootFile: "pom.xml",
            versions: [8, 11, 17, 21]
        }, 
        {
            type: "python",
            rootFile: "requirements.txt",
            versions: [2, 3]
        }, 
        {
            type: "node",
            rootFile: "package.json",
            versions: [12, 16, 18, 20]
        }
    ];

    projectFiles.map(p => {
        const rootFile = path.join(REPO, p.rootFile);
        if (fs.existsSync(rootFile)) {
            process.env.PROJECT_TYPE = p.type;
            if (p.type === "java") {
                javaVersionFromPom(path.parse(rootFile));
            } 
        }
    });
};

(main)();
