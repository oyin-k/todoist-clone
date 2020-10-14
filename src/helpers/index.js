import { collatedTasks } from "../constants";

export const collatedTasksExist = (selectedProject) =>
  collatedTasks.find((tasks) => tasks.key === selectedProject);
