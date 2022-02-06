import React from 'react';

const Loading = () => {
  return (
    <div className="m-16">
      <div
        role="progressbar"
        className="m-16 mx-auto h-40 w-full max-w-sm rounded-md p-4"
      >
        <div className="flex animate-pulse space-x-4">
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 w-3/4 rounded bg-gray-300"></div>
            <div className="space-y-2">
              <div className="h-4 w-5/6 rounded bg-gray-300"></div>
              <div className="h-4 w-5/6 rounded bg-gray-300"></div>
              <div className="h-4 rounded bg-gray-300"></div>
              <div className="h-4 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
