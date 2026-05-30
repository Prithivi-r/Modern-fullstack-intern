import { useEffect, useState } from "react";
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default Users;