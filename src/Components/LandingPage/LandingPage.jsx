import Sidebar from "../Sidebar/Sidebar";

const LandingPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <LogoutButton />
        <h1 className="text-2xl font-bold text-black bg-white flex-grow p-5 mb-4">
          Welcome User
          <br />
          This is a Dummy page for now.
          <br />
          For now, please click on Reference Data Customers to continue with the
          flow
        </h1>
      </div>
    </>
  );
};

export default LandingPage;
