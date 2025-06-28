import PropTypes from 'prop-types';
import { User, Label} from './components';
import styles from './App.module.css';

const getUserFromServer = () => ({
	name: 'Иван',
	age: 25,
	email: 'ivan@mail.ru',
	phone: '+7999-999-99-99',
});

export const App = () => {
	const user = getUserFromServer();
	return (
		<div className={styles.app}>
			<Label color={'red'}>Приложение</Label>
			<div>Разная информация приложения</div>
			<User {...user} />
		</div>
	);
};

