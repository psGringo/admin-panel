import {createServer} from "miragejs"
import {GenerateData} from "./components/DataGenerator/DataGenereator";


export const mirageServer = () => {
    let server = createServer({
            routes() {
                this.get("/api/users", () => {
                    return {users: [{id: 1, name: "Bob"}, {id: 2, name: "Bob2"}]}
                });

                this.get("/api/data", () => {
                    const data  = GenerateData(2);
                    alert(data.toString());
                    return {data: [data[1]]}
                });
            }
        }
    );


    return server;
}


