interface Todo {
  title: string;
  description?: string;
}

const todo1 = {
  title: "Oragnize desk",
  extra: "metadata", // duck typing is allowd!
};

console.log(todo1); // { title: 'Oragnize desk', extra: 'metadata' }
console.log(typeof todo1);

const updateTodo = (todo: Todo, fieldsTodoUpdate: Partial<Todo>) => ({
  // allow Partial updates
  ...todo,
  ...fieldsTodoUpdate,
});

const result1 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log(result1);
// { title: 'Oragnize desk', extra: 'metadata', description: 'throw out trash'}
console.log(typeof result1);
const todo2 = {
  ...todo1,
  description: "clean up", // description 없이 설정
};

console.log(todo2); // { title: 'Oragnize desk', extra: 'metadata', description: 'clean up' }
console.log(typeof todo2);
const updateRequiredTodo = (
  todo: Required<Todo>,
  fieldsToUpdate: Partial<Todo>
): Required<Todo> => ({ ...todo, ...fieldsToUpdate });

const result2 = updateRequiredTodo(todo2, {
  description: "throw out trash",
});

console.log(result2);
// { title: 'Oragnize desk', extra: 'metadata', description: 'throw out trash' }
console.log(typeof result2);

console.clear();

class Base {
  private hiddenA = 0;
  #hiddenB = 0;

  printInternals() {
    console.log(this.hiddenA);
    console.log(this.#hiddenB);
  }
}

const obj = new Base();

for (const a in obj) {
  console.log(a);
}
// hidenA

// console.log(obj.hiddenA);
// console.log(obj.#hiddenB);

console.clear();
