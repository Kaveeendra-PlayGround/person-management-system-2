import {Box} from "@mui/material";
import {Userform} from "./Userform.tsx";
import {Usertable} from "./Usertable.tsx";

const users = [
    {
        id: 1,
        name: "kaveendra"
    },
    {
        id: 2,
        name: "jayani"
    }
]

export const Users = () => {
    return (
        <Box sx={{width: 'calc(100% - 100px',
            margin : 'auto',
            marginTop : '100px'
        }}>
            <Userform />
            <Usertable rows={users} />
        </Box>
    );
};
