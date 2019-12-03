import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const tab = [
	{ id: 1, name: 'tab1', text: 'Status' },
	{ id: 2, name: 'tab2', text: 'Multimedia' },
	{ id: 3, name: 'tab3', text: 'Blog Post' },
];
const Header = () => {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<ul className='nav nav-tabs' role='tablist'>
			{tab.map((tab, index) => (
				<li className='nav-item' key={index}>
					<Link
						to='/'
						className={
							tab.id === activeTab
								? 'nav-link active inline-items'
								: 'nav-link inline-items'
						}
						// data-toggle="tab"
						// href="#home-1"
						// role="tab"
						// aria-expanded="true"
						onClick={() => setActiveTab(tab.id)}
					>
						<svg
							className='olymp-status-icon'
							xlinkHref='svg-icons/sprites/icons.svg#olymp-status-icon'
						/>

						<span>{tab.text}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};
export default Header;
