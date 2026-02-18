function Botao(props) {
    const {desabilitado, children, className='login-btn ui-button'} = props 
    return (<button type='text' disabled={desabilitado} className={className}>{children}</button>)
}
export default Botao