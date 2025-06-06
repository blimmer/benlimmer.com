import assert from "node:assert/strict";
import { test } from "node:test";
import { parseBlogPost } from "../src/util.ts";

const fakePost = {
  id: "2024-05-06-my-post",
  data: {},
};

test("parseBlogPost generates slug and date parts", () => {
  const result = parseBlogPost(fakePost);
  assert.equal(result.slug, "2024/05/06/my-post");
  assert.equal(result.year, 2024);
  assert.equal(result.month, 5);
  assert.equal(result.day, 6);
});
