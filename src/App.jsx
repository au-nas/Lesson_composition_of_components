import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ name, price, amount }) => {
	// const [amount, setAmount] = useState(initialAmount);

	return (
		<>
			<div>
				{name} - {price} руб
			</div>
			<div>Количество: {amount}</div>
			<Basket amount={amount} />
		</>
	);
};

Product.PropTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
};
