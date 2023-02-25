import React, { useState } from 'react';

import styles from './styles.module.scss';

type DropdownItem = {
  label: string;
  value: string;
};

type DropdownMenuProps = {
  buttonText: string;
  items: DropdownItem[];
  onItemClick: (value: string) => void;
};

const DropdownMenu = ({
  buttonText,
  items,
  onItemClick,
}: DropdownMenuProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (): void => {
    setIsOpen(true);
  };

  const handleMouseLeave = (): void => {
    setIsOpen(false);
  };

  const handleItemClick = (value: string): void => {
    onItemClick(value);
    setIsOpen(false);
  };

  return (
    <li className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonText}
        <div className={`${styles.dropdownMenu} ${isOpen && styles.show}`}>
          {items.map(item => (
            <button
              key={item.label}
              className={styles.dropdownItem}
              onClick={() => handleItemClick(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </button>
    </li>
  );
};

export default DropdownMenu;
