import { Fragment, useState } from "react";


const DisplayComments = (props) => {
   
const comment = props.onComment
//console.log('comment is: ' + JSON.stringify(comment));


//<img src={comment.profile_pic} alt="authors profile"/>
    return <div>
        {typeof comment !== "undefined" ?  <Fragment>
            
            <h3>{comment.author}</h3><p>{comment.body}</p>
            </Fragment>: console.log('found comment undefiend ')
            }
    </div>
}

export default DisplayComments