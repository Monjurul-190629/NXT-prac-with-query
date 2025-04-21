import React from 'react';

interface ButtonProps {
  handler: () => void;
  children: React.ReactNode;
  type : string
}

const Button: React.FC<ButtonProps> = ({ handler, children, type }) => {
  return (
    <button onClick={handler} className={type == 'danger' ? 'px-4 py-2 bg-orange-600 text-white rounded' : 'px-4 py-2 bg-blue-600 text-white rounded'}>
      {children}
    </button>
  );
};

export default Button;
