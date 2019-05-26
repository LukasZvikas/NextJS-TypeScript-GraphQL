import React from 'react';

interface ButtonPrimaryProps {
  title: string;
}

export const ButtonPrimary = ({ title }: ButtonPrimaryProps) => {
  return (
    <div className="d-flex justify-content-center">
      <button type="submit" className="button button__primary">
        {title}
      </button>
    </div>
  );
};
