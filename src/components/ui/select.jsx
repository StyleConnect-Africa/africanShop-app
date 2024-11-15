import React from 'react';

export const Select = ({ id, name, children, ...props }) => (
  <select id={id} name={name} className="mt-1 block w-full border-gray-300 rounded-md" {...props}>
    {children}
  </select>
);

export const SelectOption = ({ value, children }) => (
  <option value={value}>
    {children}
  </option>
);
