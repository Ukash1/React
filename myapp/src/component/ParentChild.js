function parent(){
    return(
        <div>
            <Child res= {1000} />
        </div>
    )
}
function Child(){
    const res=10;
    return(
        <div>
            <h1>child value is :{props.val}</h1>
        </div>
    )
}
export default ParentNode;