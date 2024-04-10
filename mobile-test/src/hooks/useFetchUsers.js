import { useQuery } from "react-query";
import axios from "axios";

const useFetchUsers = () => {
    return useQuery(
        "users",
        async () => {
            const response = await axios.get(
                "https://dev.api.syncremote.co/api/v1/admin/users"
            );
            const data = response.data
            if (data.success) {
                return data.users
            } else {
                return []
            }
        },
        {
            cacheTime: 60 * 60 * 1000, // Cache duration in milliseconds (1 minute in this example)
        }
    );
};


export default useFetchUsers;
