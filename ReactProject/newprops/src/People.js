 
 const People =(props) => {
    const cororona = props.cororona ? "Posetive":"Negetive"
    return (
        <>
            <h1>This guy name : {props.name} </h1>
            <h2>He's age{props.age} </h2>
            <h2>Test of corona {cororona} </h2>
        </>
    )
}

export default People 