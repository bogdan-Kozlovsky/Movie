import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

type DropdownItem = {
  label: string;
  path: string;
};

type DropdownMenuProps = {
  buttonText: string;
  items: DropdownItem[];
};

const DropdownMenu = ({ buttonText, items }: DropdownMenuProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (): void => {
    setIsOpen(true);
  };

  const handleMouseLeave = (): void => {
    setIsOpen(false);
  };

  return (
    <li className={styles.dropdown}>
      <div
        className={styles.dropdownButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonText}
        <div className={`${styles.dropdownMenu} ${isOpen && styles.show}`}>
          <ul>
            {items.map(item => (
              <li role="presentation" key={item.label} className={styles.dropdownItem}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default DropdownMenu;
