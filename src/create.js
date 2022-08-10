import React from 'react';

const create = ({
    blog,
    inputOnChange,
    createAction,
    cancelAction,
}) => {
    return (
        <div className="container">
            <h2>Create</h2>
            <input type="text" className="form-control" name="title" value={blog.title} onChange={inputOnChange} />
            <div>
                <input type="checkbox" name="completed" value={blog.completed} onChange={inputOnChange} />
                Is Complete?
            </div>
            <button className="btn btn-success" onClick={createAction}>Save</button>
            <button className="btn btn-light" onClick={() => cancelAction("")}>Cancel</button>
        </div>
    )
}

export default create;