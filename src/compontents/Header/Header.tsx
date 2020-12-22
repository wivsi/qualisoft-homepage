import React from 'react';
import HeaderItem from '../HeaderItem/HeaderItem';

/* const getData = () => {
	fetch('./headers.json')
		.then((res) => res.json())
		.then((myJson) => console.log(myJson));
}; 
useEffect(() => {
		getData();
	}, []);
 */

interface IOptions {
	title: string;
	subOptions: Array<IOptions>;
}
interface OptionsProps {
	options: Array<IOptions>;
}

const Header: React.FC<OptionsProps> = ({ options }) => {
	return (
		<div>
			{options.map((option, i) => (
				<ul key={i}>
					<HeaderItem>{option.title}</HeaderItem>
					{option.subOptions && option.subOptions.length > 0 && (
						<Header options={option.subOptions} />
					)}
				</ul>
			))}
		</div>
	);
};

export default Header;
