import Sidebar from "@/components/sidebar/Sidebar";
import Nav from "@/components/nav/Nav";
import User from "@/components/user/User";



export default async function ProfilePage() { 
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="p-4 xl:ml-80">
        <Nav />
        {/* <User/> */}
      </div>
    </div>
  );
}


