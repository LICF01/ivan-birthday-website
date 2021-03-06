import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Player from '../components/Player';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Jupiter = ({ variants }) => {
	const ref = useRef(null);

	useEffect(() => {
		gsap.to(ref.current, {
			width: '80%',
			position: 'static',
			duration: 3,
		});
	}, []);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={variants}
		>
			<div className='px-10 min-h-screen py-20 relative'>
				<div>
					<Link to='/'>
						<p className='text text-md font-bold absolute top-0 mt-5  uppercase'>
							Atras
						</p>
					</Link>
				</div>

				<div className='max-w-xl mx-auto'>
					<div>
						<p className='text text-4xl font-bold'>Hola!</p>
						<p className='text text-5xl font-bold'>Soy Júpiter</p>
					</div>

					<img
						ref={ref}
						src='./SVG/jupiter.svg'
						className='w-[3rem] absolute z-50 top-[50px] left-10 cursor-pointe my-10  mx-auto'
						alt='jupiter'
					/>

					<div className='mb-10'>
						<Player
							src={
								'https://upload.wikimedia.org/wikipedia/commons/e/e2/Holst_The_Planets_Jupiter.ogg'
							}
						/>
					</div>

					<div className='info  text-center text-2xl'>
						<p className='text  my-5'>
							Recibo mi nombre en honor al dios griego Zeus, al
							cual los romanos llamaban Júpiter soy el más grande
							de los planetas y más antiguo, algunos dicen que
							incluso más antiguo que el Sol.
						</p>
						<p className='text  my-5'>
							En la
							<a
								href='https://www.wikiwand.com/es/Los_planetas_(suite)'
								className='text-blue-400 visited:text-purple-400 ...'
							>
								{' '}
								<i>Suite de los planetas</i>{' '}
							</a>
							de
							<a
								href='https://www.wikiwand.com/es/Gustav_Holst'
								className='text-blue-400 visited:text-purple-400 ...'
							>
								{' '}
								Gustav Holst{' '}
							</a>
							, soy <i>"El portador de la alegría"</i>.
						</p>
						<p className='text  my-5'>
							Represento al alegre tío de cara redonda de todos
							los planetas y rey de los dioses, impresionante y
							majestuoso.
						</p>
						<p className='text  my-5'>
							Los metales y las cuerdas se encuentran con momentos
							de conmovedora belleza en la gloriosa melodía que
							ahora se conoce como
							<a
								href='https://www.wikiwand.com/es/I_Vow_to_Thee,_My_Country'
								className='text-blue-400 visited:text-purple-400 ...'
							>
								{' '}
								"Te prometo a ti, mi país".{' '}
							</a>
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Jupiter;
