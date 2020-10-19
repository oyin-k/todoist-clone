import { collatedTasks } from "../constants";

export const getTitle = (projects, projectId) =>
  projects.find((project) => project.projectId === projectId);

export const getCollatedTitle = (projects, key) =>
  projects.find((project) => project.key === key);

export const collatedTasksExist = (selectedProject) =>
  collatedTasks.find((tasks) => tasks.key === selectedProject);

export const generatePushId = () => {
  const PUSH_CHARS =
    "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

  const lastRandChars = [];

  return function () {
    let now = new Date().getTime();
    console.log("1: ", now);

    const timeStampChars = new Array(8);
    console.log("2: ", timeStampChars);

    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
      console.log(i, now);
    }

    let id = timeStampChars.join("");
    console.log("3: ", id);

    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
      console.log(i, id);
    }

    console.log("4: ", id);
    return id;
  };
};
