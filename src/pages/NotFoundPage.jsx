import { Link } from 'react-router-dom';

function NotFoundPage() {   
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
      <Link to="/"> Home </Link>
    </div>
  );
}   


export default NotFoundPage;