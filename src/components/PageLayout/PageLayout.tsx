import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { menuItems } from './pageLayoutData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './pageLayout.css';

const PageLayout: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Coop</h2>

        <nav>
          {menuItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className={`dropdown ${openDropdown === item.label ? 'open' : ''}`}
              >
                <button
                  className="dropbtn"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  {openDropdown === item.label ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </button>
                <div className="dropdown-content">
                  {item.children.map((sub) => (
                    <Link key={sub.label} to={sub.path}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} to={item.path ?? '#'}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
