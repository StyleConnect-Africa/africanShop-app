import React from 'react';

export const FileInput = ({ id, name, multiple, className, ...props }) => (
  <div className={`relative ${className}`}>
    <input
      type="file"
      id={id}
      name={name}
      multiple={multiple}
      className="absolute inset-0 opacity-0 cursor-pointer"
      {...props}
    />
    <label
      htmlFor={id}
      className="block w-full py-2 px-4 text-center text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
    >
      Choose Files
    </label>
  </div>
); 