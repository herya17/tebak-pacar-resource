import React from 'react';
import Swal from 'sweetalert2';

function sweetAlert() {
	return Swal.fire({
        title: '12 November',
        text: 'Sorry, there additional features in our application. Available or release on 12 November.',
        icon: 'info',
        showConfirmButton: true,
    });
}

function App() {
    return (
        <div className="wrapper">
        	<div className="image">
        		<img src="./images/pippo/magicut_1666858177747.png" alt="saya pippo" />
        	</div>
        	<div className="description">
        		<p>Hai, kenalin aku Pippo. Aku ini AI yang bisa mengerti tentang kamu. Salam kenal yah.</p>
        	</div>
        	<div className="btnContinue">
        		<button onClick={sweetAlert}>Lanjut</button>
        	</div>
        </div>
    );
}

export default App;
