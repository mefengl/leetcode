// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];

// ============= Your Code Here =============
type WhiteSpace = " " | "\n" | "\t";
// recursive, but one thing at a time
type Trim<S extends string> = S extends `${WhiteSpace}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${WhiteSpace}`
  ? Trim<L>
  : S;
