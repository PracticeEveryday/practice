interface Todo {
  title: string;
  description?: string;
  completed: boolean;
}

type TodoPreview1 = Pick<Todo, "title" | "completed">;

const todo1: TodoPreview1 = {
  // 명확한 타이핑
  title: "Clean room",
  completed: false,
  // description: "x", // 덕 타이핑을 허용하지 않는다.
};

type TodoPreview2 = Omit<Todo, "description" | "completed">;

const todo2: TodoPreview2 = {
  title: "Clean room",
};

const todo3: Readonly<Todo> = {
  title: "Delete inactive users",
  completed: true,
};

// todo3.completed = false; Error

const todo4: Todo = {
  ...todo1,
  description: "Doing shores is fun",
};

const description: NonNullable<string | undefined> = todo4.description ?? "";
