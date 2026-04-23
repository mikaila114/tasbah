/*import { useEffect, useState } from "react";
import minus from './assets/minus-sign.png';
import plus from './assets/plus.png';
import reset from './assets/redo.png';
import { useRef } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const mainContainer = useRef('');
    const [saved, setSaved] = (mainContainer);
    console.log(saved)

    
 

    useEffect(() => {
        localStorage.setItem('main-container', mainContainer)
    }, [mainContainer]);


    useEffect(() => {
        const saveCount = Number(localStorage.getItem('count'))

        if(saveCount){
            setCount(saveCount);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count]);

    function handleDarkMode() {
        mainContainer.current.classList.toggle('mainContainer');
        document.body.classList.toggle('body-class-list')
    }
    return(

        <div className="counter">
        <div className="heading">
        <h1>Tasbah</h1>
        <button onClick={handleDarkMode}>Dark/Light</button>
        </div>

        <div className="main-continer" ref={mainContainer}>
        <div className="number-display">
        {count}
        </div>
        
        <div className="buttons">
        <button className="add-btn" onClick={() => setCount(count + 1)}>
        <img src={plus} alt="" style={{width: '50px'}}/>
        </button>
        <button  className="minus-btn" onClick={() => setCount(count >= 1 ? count -1 : 0)}>
        <img src={minus} style={{width: '30px'}} alt="" />
        </button>
        <button className="reset-btn" onClick={() => setCount(0)}>
        <img src={reset} style={{width: '30px'}} alt="" />
        </button>
        </div>
    
        </div>
        </div>
    )
}
export default Counter
*/
import { useEffect, useState, useRef } from "react";
import minus from './assets/minus-sign.png';
import plus from './assets/plus.png';
import reset from './assets/redo.png';

function Counter() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const mainContainer = useRef(null);

    // ✅ Load count daga localStorage
    useEffect(() => {
        const saveCount = Number(localStorage.getItem('count'));
        if (!isNaN(saveCount)) {
            setCount(saveCount);
        }
    }, []);

    // ✅ Save count
    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    // ✅ Load dark mode
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            setDarkMode(true);
        }
    }, []);

    // ✅ Apply dark mode + save
    useEffect(() => {
        if (darkMode) {
            mainContainer.current.classList.add('mainContainer');
            document.body.classList.add('body-class-list');
        } else {
            mainContainer.current.classList.remove('mainContainer');
            document.body.classList.remove('body-class-list');
        }

        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    function handleDarkMode() {
        setDarkMode(prev => !prev);
    }

    return (
        <div className="counter">
            <div className="heading">
                <h1>Tasbah</h1>
                <button onClick={handleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            <div className="main-continer" ref={mainContainer}>
                <div className="number-display">
                    {count}
                </div>

                <div className="buttons">
                    <button className="add-btn" onClick={() => setCount(count + 1)}>
                        <img src={plus} alt="" style={{ width: '50px' }} />
                    </button>

                    <button className="minus-btn" onClick={() => setCount(count >= 1 ? count - 1 : 0)}>
                        <img src={minus} style={{ width: '30px' }} alt="" />
                    </button>

                    <button className="reset-btn" onClick={() => setCount(0)}>
                        <img src={reset} style={{ width: '30px' }} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;