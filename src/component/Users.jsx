import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log("Deleted id", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user successfully deleted");
        }
      });
  };
  return (
    <div>
      <h2>Users : {users.length} </h2>

      <div>
        {users.map((user) => (
          <p key={user._id}>
            {" "}
            Name = {user.name}, Email= {user.email}{" "}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
