import React from 'react';

const HeaderItem: React.FC<{ children: string }> = ({ children }) => {
	return <li>{children}</li>;
};

export default HeaderItem;
