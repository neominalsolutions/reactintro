import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponentSample from './components/ClassComponentSample';

function App() {
	// hooks function componentlere özellik kazandıran yapılar.
	const [visible, setVisible] = useState<boolean>(false); // hooks
	// visible getter
	// setVisible setter, function componentlerde state değişimini sağlar

	return (
		<>
			{/* v-if ng-if */}
			{/* <a href='' title=''></a>
			<input value={}></input> */}
			{visible && (
				<ClassComponentSample
					sx={{ color: 'white', backgroundColor: 'blue', padding: '10px' }}
				/>
			)}

			{/* <ClassComponentSample
				sx={{ color: 'green', backgroundColor: 'yellow', padding: '10px' }}
			/>

			<ClassComponentSample
				sx={{ color: 'yellow', backgroundColor: 'green', padding: '10px' }}
			/> */}
			<button
				onClick={() => {
					setVisible(!visible); // true ise false, false ise true yap
				}}
			>
				Show Hide
			</button>
		</>
	);
}

export default App;
