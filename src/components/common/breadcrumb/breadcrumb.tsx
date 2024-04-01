import { Link } from 'react-router-dom';
import React from 'react';

interface BreadcrumbProps {
  items: { label: string; link: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-gray-600">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center"> 
            {index !== 0 && <span className="mx-2">&#187;</span>}
            <Link to={item.link} className={index === items.length - 1 ? "font-semibold" : ""}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
