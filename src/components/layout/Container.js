
function Containerjs(props){

  return (
    <div className={`container ${props.customClass}`}>
      {props.children}
    </div>
  )

};

export default Containerjs;