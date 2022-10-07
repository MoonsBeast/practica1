import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { solve } from "./main.ts";

Deno.test(function allString() {
  assertEquals(solve(["1", "2", "3"]), [6, 3, 2]);
});

Deno.test(function allNumber() {
  assertEquals(solve([1, 2, 3]), [6, 3, 2]);
});

Deno.test(function someBoolean() {
  assertEquals(solve([1, true, 3]), [NaN, 3, NaN]);
});

Deno.test(function tuttiFrutti() {
  assertEquals(solve(["1", 2, "3"]), [6, 3, 2]);
});

Deno.test(function tuttiFruttiAndArray() {
  assertEquals(solve(["1", [2, "3"]]), [6, 3, 2]);
});

Deno.test(function evilTuttiFrutti() {
  assertEquals(solve([[1, [2, ["3", 4]]], "5"]), [120, 60, 40, 30, 24]);
});