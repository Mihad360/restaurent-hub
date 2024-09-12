import useAuth from "../hooks/useAuth";

const Userhome = () => {

    const {user} = useAuth()

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-amber-600 pt-5">Hi, Welcome Back! {user.displayName}</h1>
            </div>
        </div>
    );
};

export default Userhome;