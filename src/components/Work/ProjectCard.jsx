import React from "react";

const ProjectCard = ({ name, id, category, image }) => {
  return (
    <div className=" h-fit rounded p-1 duration-500 hover:bg-gray-200 hover:p-2 hover:text-gray-500 text-gray-500">
      <img
        src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80"
        className=" translate-y-50 h-36 w-full transform rounded object-cover hover:shadow-2xl"
        alt=""
      />
      <div className="flex flex-col px-2">
        <div className="flex items-center justify-between gap-4 pt-4 pb-2">
          <span className="truncate whitespace-pre font-bold">
            Animated Search Bar Interaction
          </span>
          <span className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <label className="text-xs font-bold" for="">
              23
            </label>
          </div>
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <label className="text-xs font-bold" for="">
              23
            </label>
          </div>
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <label className="text-xs font-bold" for="">
              23
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
