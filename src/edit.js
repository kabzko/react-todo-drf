import React from 'react';

const edit = ({
    blog,
    inputOnChange,
    updateAction,
    cancelAction,
}) => {
    
    return (
        <div className="container">
            <h2>Edit</h2>
            <input type="text" className="form-control" name="title" value={blog.title} onChange={inputOnChange} />
            <div>
                <input type="checkbox" name="completed" value={blog.completed} onChange={inputOnChange} />
                Is Complete?
            </div>
            <button className="btn btn-success" onClick={() => updateAction(blog.id)}>Save</button>
            <button className="btn btn-secondary" onClick={() => cancelAction("")}>Cancel</button>
        </div>
    )
}

export default edit;