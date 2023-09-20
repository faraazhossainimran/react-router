import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div className="container mx-auto">
      <div className="text-center py-8">
        
        <h1 className="text-3xl">User Details</h1>
        <p className="text-2xl">Name: {name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
