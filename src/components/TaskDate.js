import React from "react";
import moment from "moment";
import { FaSpaceShuttle, FaRegPaperPlane, FaSun } from "react-icons/fa";

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
          <li data-testid="task-date-overlay">
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format("DD/MM/YYYY"));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format("DD/MM/YYYY"));
              }}
            >
              <span>
                <FaSpaceShuttle />
              </span>
              <span>Today</span>
            </div>
          </li>
          <li data-testid="task-date-tomorrow">
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
              }}
            >
              <span>
                <FaSun />
              </span>
              <span>Tomorrow</span>
            </div>
          </li>
          <li data-testid="task-date-next-week">
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
              }}
            >
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Next week </span>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};
