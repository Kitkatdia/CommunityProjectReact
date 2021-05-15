import './hire-me.scss';
import Button from '../Button/button';
import Heading2 from '../Heading-2/heading-2';

function HireMe() {
	return (
		<section className='hire-me'>
			<Heading2 text='Hire Me' />
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
				distinctio nostrum porro asperiores! <br />
				Quidem blanditiis eveniet harum cum possimus iste.
			</p>
			<Button btnClass='grey-button' text='Hire Me' />
		</section>
	);
}

export default HireMe;
