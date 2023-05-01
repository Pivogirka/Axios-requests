import './Button.css'
function Button(props) {
  function change() {
    props.changeCount(props.inc);
  }
  return (
    <button
      className="counterButton"
      onClick={change}>{props.children}
    </button>
  )
}

export {Button};