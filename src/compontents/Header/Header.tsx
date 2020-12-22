import React, { ReactNode } from 'react';
import styles from './Header.module.scss';

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <div>{children}</div>;
};

export default Header;
