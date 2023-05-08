import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Welcome to DOH</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
