import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

const Profile = () => {

    const {user} = useAuth()

    return (
        <div>
            <Helmet>
                <title>RestauraHub || Profile</title>
            </Helmet>
            <div className="flex justify-center pt-44">
            <div className="flex items-center gap-16 relative justify-center rounded-lg p-12 bg-white">
                <div>
                    <h1 className="text-4xl absolute -top-5 text-amber-600 font-bold">Profile</h1>
                    <h1 className="text-xl pt-8 pb-1 text-black font-semibold">Name</h1>
                    <p className="text-base font-medium">{user?.displayName}</p>
                    <div className="pt-3">
                        <h1 className="text-xl pt-2 pb-1 text-black font-semibold">Email</h1>
                        <p className="text-base font-medium">{user?.email}</p>
                    </div>
                </div>
                <div>
                    <img className="rounded-full" src={user?.photoURL} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;