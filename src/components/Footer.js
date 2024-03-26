import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<footer className='text-lg flex justify-between py-8 px-12 bg-algae shadow-2xl lg:px-44'>
			<p>
				Made with <FontAwesomeIcon icon={faHeart} color='red' /> by Dharmik
			</p>
			<ul className='flex gap-4'>
				<li>
					<a target='_blank' href='https://github.com/Dharmik48/meme-generator'>
						<FontAwesomeIcon icon={faGithub} size='xl' color='white' />
					</a>
				</li>
				<li>
					<a target='_blank' href='https://twitter.com/frontendilia'>
						<FontAwesomeIcon icon={faTwitter} size='xl' color='white' />
					</a>
				</li>
			</ul>
		</footer>
	);
}
