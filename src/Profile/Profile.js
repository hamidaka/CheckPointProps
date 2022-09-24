

function Profile(props){
    function HandleName(e){
        e.preventDefault();
        alert(props.name)
    }
    return(
        <div>
            <h1>{props.name}<br></br>{props.bio} <br></br>{props.profession}</h1>
            <div> {props.children}   </div>
             <a href="/" onClick={HandleName}>click me</a>
        </div>
    )
}
export default Profile ;