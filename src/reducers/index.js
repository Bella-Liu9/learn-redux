const mockTasks = [
  {
    id: 1,
    title: "Learn Redux",
    description: "this store, actions,and reducers, oh my ladygaga~",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Peace on Earth",
    description: "No big deal",
    status: "In Progress",
  },
];
                            // state 定义初始状态
export default function tasks(state = { tasks: mockTasks }, action) {
  return state;
}
