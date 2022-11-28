import { Link } from "react-router-dom";

function LinkButtonjs({to, text}){

  return (
    <>
      <Link className="btn_link" to={to}>
        {text}
      </Link>
    </>
  )

};

export default LinkButtonjs;