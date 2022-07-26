import React from 'react';
const MainSelect = ({ options, defaultValue, onChange }) => {
    return (
        <select onChange={onChange}>
            <option value="" disabled>{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}> {option.text}</option>)
            }
        </select >

    )
}
export default MainSelect;