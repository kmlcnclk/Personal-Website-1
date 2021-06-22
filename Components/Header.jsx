import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import styles from '../styles/Header.module.css';

function Header() {
  const [topMenuState, setTopMenuState] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const menuItems = [
    { url: '/', name: 'Home' },
    { url: '/photos', name: 'Photos' },
    { url: '/education', name: 'Education' },
    { url: '/notes/', name: 'Notes' },
    { url: '/sour', name: 'Sour' },
    { url: '/bookmarks', name: 'Bookmarks' },
  ];

  return (
    <nav className="text-center mt-3 mb-3">
      <div className="d-inline-block">
        <div className="d-inline-block">
          {topMenuState ? (
            <div>
              {menuItems.map((menuItem, index) => (
                <div key={index} className={styles.menuItem}>
                  <Link href={`${menuItem.url}`}>
                    <div
                      style={{ cursor: 'pointer' }}
                      className="d-inline-block p-2"
                    >
                      {menuItem.name}
                    </div>
                  </Link>
                </div>
              ))}

              <div className={styles.colorState} onClick={toggleColorMode}>
                {colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
              </div>
            </div>
          ) : (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setTopMenuState(!topMenuState)}
            >
              <HiOutlineMenuAlt4
                size={30}
                style={{ display: 'inline-block' }}
              />
              <div className="d-inline-block p-2">Menu</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
