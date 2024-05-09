function TodoRowItem(props){

    return( //Must only return one thing

        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>

        </tr>
    )
}

export default TodoRowItem //allows us to use this compon ent within our application