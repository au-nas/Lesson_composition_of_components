import PropTypes from 'prop-types';

const Product = ({ name, price }) => {
	return <div>{name} - {price} руб</div>
};

Product.PropTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
};
