import React, { useEffect, useState } from 'react';

import Table from './table';
import Create from './create';
import Edit from './edit';

import axios from 'axios';

function App() {

  const [blog, setBlog] = useState({
    id: "",
    title: "",
    completed: false,
  });
  const [blogs, setBlogs] = useState([]);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    if (blogs.length === 0) {
      getBlogs();
    }
  }, [])

  const getBlogs = () => {
    axios.get("https://jellyfish-app-j2ass.ondigitalocean.app/api/tasks").then((response) => {
      setBlogs(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  const changeActionType = (type) => {
    setBlog({
      id: "",
      title: "",
      completed: false,
    });
    setActionType(type);
  }

  const inputOnChange = (event) => {
    let value = event.target.value
    if (event.target.name === "completed") {
      value = event.target.checked;
    }
    const updateForm = {...blog, [event.target.name]: value};
    setBlog(updateForm);
  }

  const editAction = (id, type) => {
    axios.get(`https://jellyfish-app-j2ass.ondigitalocean.app/api/tasks/${id}/`).then((response) => {
      setBlog(response.data);
      setActionType(type);
    }).catch((error) => {
      console.log(error);
    })
  }

  const createAction = () => {
    const data = {
      title: blog.title,
      completed: blog.completed,
    };
    axios.post("https://jellyfish-app-j2ass.ondigitalocean.app/api/tasks", data).then(() => {
      getBlogs();
      setActionType("");
    }).catch((error) => {
      console.log(error);
    })
  }

  const updateAction = (id) => {
    const data = blog;
    axios.put(`https://jellyfish-app-j2ass.ondigitalocean.app/api/tasks/${id}/`, data).then(() => {
      getBlogs();
      setActionType("");
    }).catch((error) => {
      console.log(error);
    })
  }

  const deleteAction = (id) => {
    axios.delete(`https://jellyfish-app-j2ass.ondigitalocean.app/api/tasks/${id}/`).then(() => {
      getBlogs();
      setActionType("");
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <button className="btn btn-primary" onClick={() => changeActionType("create")}>New</button>
        </div>
        {
          actionType === "" ?
          <Table
            blogs={blogs}
            editAction={editAction}
            deleteAction={deleteAction}
          /> : null
        }
        {
          actionType === "create" ?
          <Create 
            blog={blog}
            inputOnChange={inputOnChange}
            createAction={createAction}
            cancelAction={changeActionType}
          /> : null
        }
        {
          actionType === "edit" ?
          <Edit 
            blog={blog}
            inputOnChange={inputOnChange}
            updateAction={updateAction}
            cancelAction={changeActionType}
          /> : null
        }
      </header>
    </div>
  );
}

export default App;
