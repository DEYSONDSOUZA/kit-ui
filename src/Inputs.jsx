function Input(props) {
    const {placeholder, nome, className='ui-textfield'} = props 
    return (<input placeholder={placeholder} name={nome} className={className}/>)
}
export default Input