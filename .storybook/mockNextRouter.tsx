// Mock Next.js Link component for Storybook
import React from 'react';

const Link = ({ children, href, ...props }: any) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
