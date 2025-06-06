import assert from "node:assert/strict";
import { test } from "node:test";
import { getLastModified } from "../src/remark/lastModifiedTime.ts";

const dummyPath = "dummy.mdx";

test("uses overrideLastModified when provided", () => {
  const fm = { overrideLastModified: "2022-01-01T00:00:00Z" };
  const result = getLastModified(fm, dummyPath);
  assert.equal(result, "2022-01-01T00:00:00Z");
});

test("falls back to git log when no override", () => {
  const fm = {};
  const mockExec = () => Buffer.from("2024-05-01T00:00:00Z");
  const result = getLastModified(fm, dummyPath, mockExec);
  assert.equal(result, "2024-05-01T00:00:00Z");
});
