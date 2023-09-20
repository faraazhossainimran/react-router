import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status);
  return (
    <div className="text-center">
      <h2 className="text-5xl my-16">Oops!!</h2>
      <p>Sorry!! An unexpected error occurred.</p>
      {error.status === 404 && (
        <div className="py-8">
          <h3>Page not found</h3>
          {/* <p className="py-4">Go back to home</p> */}
          <Link to={"/"}><button className="btn">Go back to home</button></Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
