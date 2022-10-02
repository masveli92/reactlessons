import {axiosService} from "./axios.service";
import {urls} from "../configs";

const getUsers = () => {
    return axiosService.get( urls.users);
}

export {getUsers}
