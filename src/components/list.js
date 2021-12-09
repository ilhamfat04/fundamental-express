// code Here

// penulisan 3
// function List({ listData, color, qty }) {
function List(props) {
    // console.log(props);

    // penulisan 2
    const { listData, color, qty } = props

    return (
        <div>
            {/* penulisan 1 */}
            {/* <h1>{props.listData} - {props.color} - {props.qty} </h1> */}

            {/* penulisan 2 */}
            <h1>{listData} - {color} - {qty} </h1>


        </div>
    )

}

export default List