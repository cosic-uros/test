export const Delete = ({ id, handleDel }) => {

    return(
        <button className = 'btn btn-danger' onClick = { () => handleDel(id) }>Del</button>
    )
}

export const Edit = ({ id, handleEdit }) => {
    return(
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Edit
            </button>

            <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    Modal body..
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}
