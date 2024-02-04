import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
	const footerLinks = [
		{
			id: 0,
			title: 'Legal',
			links: ['Terms of use', 'Privacy Policy', 'User Agreement'],
		},
		{
			id: 1,
			title: 'About Us',
			links: ['Support Center', 'Customer Support', 'About Us', 'Copyright'],
		},
		{
			id: 2,
			title: 'Our Information',
			links: [
				'Return Policy',
				'Privacy Policy',
				'Terms & Conditions',
				'Site Map',
			],
		},
		{
			id: 3,
			title: 'My Account',
			links: [
				'Press Inquiries',
				'Social Media',
				'Directories',
				'Images & B-roll',
			],
		},
	];

	return (
		<footer className='bg-gray bg-stone-300 bottom-0 mt-28 h-[300px]'>
			<div className='footerContainer flex items-start justify-evenly py-4'>
				{footerLinks.map(({ id, title, links }) => {
					return (
						<div>
							<h2 className='text-sm mb-3 md:text-xl lg:text-2xl'>{title}</h2>
							<ul className='flex flex-col'>
								<li className='text-xs cursor-pointer hvr-fade hover:text-yellow md:text-md lg:text-lg'>{links[0]}</li>
								<li className='text-xs cursor-pointer hvr-fade hover:text-yellow md:text-md lg:text-lg'>{links[1]}</li>
								<li className='text-xs cursor-pointer hvr-fade hover:text-yellow md:text-md lg:text-lg'>{links[2]}</li>
								<li className='text-xs cursor-pointer hvr-fade hover:text-yellow md:text-md lg:text-lg'>{links[3]}</li>
							</ul>
						</div>
					);
				})}
			</div>
			<ul className='flex justify-center items-center space-x-5 my-4'>
				<li className='text-center rounded-full'>
					<FaGithub className='text-2xl lg:text-3xl cursor-pointer m-auto hover:text-black' />
				</li>
				<FaLinkedin className='text-2xl lg:text-3xl cursor-pointer m-auto hover:text-black' />
				<FaTiktok className='text-2xl lg:text-3xl cursor-pointer m-auto hover:text-black' />
				<FaXTwitter className='text-2xl lg:text-3xl cursor-pointer m-auto hover:text-black' />
			</ul>
			<div className='flex justify-center'>
				<p>© 2023 Matthew A. Nguyen. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
