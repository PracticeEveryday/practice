// import { sayHello, sayBye } from "./export.js";

// sayHello("kim"); // Hello Kim
// sayBye("kim"); // Bye Kim

import * as say from "./export.js";

say.sayHello("kim"); // Hello Kim
say.sayBye("kim"); // Bye Kim
