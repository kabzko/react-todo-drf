import React from 'react';

const table = ({
    blogs,
    editAction,
    deleteAction,
}) => {

    const tdStyle = {
        textAlign: "center"
    }

    const renderTableData = () => {
        if (!blogs) {
            return (
                null
            )
        }
        if (blogs.length === 0) {
            return (
                <tr>
                    <td colSpan="100%" style={tdStyle}>
                        No data found!
                    </td>
                </tr>
            )
        }
        return (
            blogs.map((response) => {
                return (
                    <tr key={response.id}>
                        <td>
                            {response.id}
                        </td>
                        <td>
                            {response.title}
                        </td>
                        <td>
                            {
                                response.completed ? "Complete" : "Not Complete"
                            }
                        </td>
                        <td>
                            <button className="btn btn-secondary" onClick={() => editAction(response.id, "edit")}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteAction(response.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    )
}

export default table;