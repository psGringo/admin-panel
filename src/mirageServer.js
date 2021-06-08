import {createServer} from "miragejs"


export const mirageServer = () => {
    let server = createServer();
    server.get("/api/users", () => {
        return {users: [{id: 1, name: "Bob"}]}
    });
    return server;
}


