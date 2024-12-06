
const FruitList = (props) => {
  if (!props.LIST) {
    return <p> No Students</p>
  }
  return (
    <ol>
      {
        props.LIST.map((i, index) => <li key={index}>{i}</li>)
      }

    </ol>
  )

}

export default FruitList;