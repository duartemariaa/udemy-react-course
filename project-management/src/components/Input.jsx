import { forwardRef } from 'react';
import '../index.css';

const Input = forwardRef(function Input({label, textarea, ...props}, ref){
    return (
        <p className="input-container">
            <label>{label}</label>
            {textarea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props}/>}
        </p>
    )
});

export default Input