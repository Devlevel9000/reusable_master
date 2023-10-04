import { test, expect } from "vitest";
import { getProjectType } from "src/get-project-type";

const javaProjectPath = "tests/fixtures/projects/java";
const pythonProjectPath = "tests/fixtures/projects/python";
const nodeProjectPath = "tests/fixtures/projects/python";

test("Expect to return null if empty string is given", () => {
    expect(getProjectType("")).toBeNull();
});

test("Expect to return null if path does not exist", () => {
    expect(getProjectType("non/existent/path")).toBeNull();
});

test("Expect to return Java Project type object", () => {
    expect(getProjectType(javaProjectPath)).toHaveProperty("type", "java");
});

test("Expect to return Python Project type object", () => {
    expect(getProjectType(pythonProjectPath)).toHaveProperty("type", "python");
});

test("Expect to return Node Project type object", () => {
    expect(getProjectType(nodeProjectPath)).toHaveProperty("type", "python");
});