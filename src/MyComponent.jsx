// import { useEffect } from "react";

// import { Linter } from 'eslint';
// import { Fragment } from 'react';

// export const MyComponent = () => {
// 	const date = new Date();

// 	/**
//    * Это один из хуков — вспомогательная функция для React-компонента.
//    * Подробно изучим его в уроке "Запросы к серверу".
//    */
// 	useEffect((props) => {
// 		console.log(date);
// 	}, []);

// 	return (
// 		<div>{String(date)}</div>
// 	);
// };

// // как вывести переменную
// export const MyComponent = () => {
// 	const value = 123;
// 	const className = 'divElement';

// 	// return <div className="divElement">123</div>
// 	return <div className={className} style={{ width: '100px', marginTop: '20px' }}>{value}</div>
// };

// import { Fragment } from 'react';

// const getValue = () => 123;

// export const MyComponent = () => {
// 	const tagName = 'div';

// 	return (
// 	    <Fragment>
// 			<label>Значение</label>
// 			<div
// 				className={tagName + 'Element'}
// 				style={{ width: '100px', marginTop: '20px' }}
// 			>
// 				{getValue()}
// 			</div>
// 		</Fragment>
// 	);
// };

//чтобы показать ничего мы должны вернуть null

// export const MyComponent = () => {
// 	return null;
// };

// вывод времени на страницу

// import { useState } from 'react';

// const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

// export const MyComponent = () => {
// 	const [currentDate, setCurrentDate] = useState(Math.random());

// 	setTimeout(() => {
// 		setCurrentDate(Math.random());
// 	}, 1000)

// 	return <div>{currentDate}</div>
// };

// // пример мутирования и изменения
// import { useState } from 'react';

// const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

// export const MyComponent = () => {
// 	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });

// 	// setObj({ a: 20, b: 20, c: 30 });

// 	if (obj.a === 10) {
// 		setObj({ ...obj, a: 20 });
// 	}
// //так нельзя
// 	// let obj1 = { a: 10 };

// 	// obj1.a = 20;

// 	// const obj2 = obj1;

// 	// obj1 = { a: 20 } ;

// 	// console.log(obj1 === obj2); // false

// 	return <div>{a}</div>
// };



// import { useState } from 'react';

// export const MyComponent = () => {
// 	const [showText, setShowText] = useState(true);

// 	const onClick = () => {
// 		setShowText(!showText);
// 	};

// 	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>;

// 	return (
// 		<>
// 			{showText && text}
// 			<button onClick={onClick}>{showText ? 'Скрыть' : 'Показать'} текст</button>
// 		</>
// 	);
// };




import { useState } from 'react';
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [showRedText, setShowRedText] = useState(true);

	const onClick = () => {
		setShowRedText(!showRedText);
	};

	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>;

	return (
		<>
			{text}
			<button onClick={onClick}>Изменить цвет текста</button>
		</>
	);
};
