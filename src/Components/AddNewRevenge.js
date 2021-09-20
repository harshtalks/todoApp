import React, {useState} from 'react'


const AddNewRevenge = ({addCriminal}) => {
    const [name, setName] = useState("");
    const [crime, setCrime] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        addCriminal({Name: name, Crime: crime})
    }

    return (
            <form onSubmit = {onSubmit} >
                <input type="text" placeholder = "Name" 
                value = {name}
                onChange = {el => setName(el.target.value)}
                />

                <input type="text" placeholder = "What did they do?"
                value = {crime}
                onChange = {el => setCrime(el.target.value)}
                />

                <button>Add 'em</button>
            </form>
    )
}

export default AddNewRevenge
