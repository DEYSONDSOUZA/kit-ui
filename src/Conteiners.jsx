function Container(props) {
    const {nomeDaClasse, children, className='ui-container'} = props 
    return (<div className={`${nomeDaClasse} ${className}`}>{children}</div>)
}
export default Container