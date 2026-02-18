function Link(props) {
    const {href, children, className='ui-link'} = props 
    return (<a href={href} className={className}>{children}</a>)
}
export default Link