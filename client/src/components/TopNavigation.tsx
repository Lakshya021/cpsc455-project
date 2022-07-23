import TEXT from "../statics/text";
import SearchBar from "../components/SearchBar"
import { setAuthToken } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopNavigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = () => {
        window.localStorage.removeItem("authToken");
        dispatch(setAuthToken(""));
        navigate("/")
    }


    return (
        <div className="navbar w-full bg-base-100 z-50 border-b-[1px] border-[#dbdbdb]">
            <div className="w-full mx-[10vw] flex justify-between">
                <div className="flex">
                    <button className="btn btn-ghost normal-case text-xl">{TEXT.COMMON.TITLE}</button>
                </div>
                <div className="flex-none gap-2">
                    <SearchBar />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="profile-pic" src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <button className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </button>
                        </li>

                        <li><a href="/settings">Settings</a></li>
                       

                       
                        <li><button onClick={signOut}>Logout</button></li>

                    </ul>
                </div>
            </div>
        </div >
    );
}

export default TopNavigation;

