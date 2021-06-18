import { createServer} from "miragejs"
import {GenerateData} from "../utils/DataGenerator/DataGenereator";
import {states} from "./states";
import {getComparer} from "./sort";

/* eslint-disable */
export const mirageServer = () => {

    const initialData = GenerateData(200);

    const stringifyResponse = (field, data) => {
        return JSON.stringify({
            [`${field}`]: data
        })
    }


    const getFilterSource = (filtered) => {
        return filtered ? filtered : initialData;
    }

    let server = createServer({

            routes() {

                // --- fetch orders

                this.get("/api/data", () => {
                    return stringifyResponse('orders', initialData);
                });

                // --- fetch order

                this.get("/api/order/:id", (schema, request) => {
                    let id = request.params.id;
                    return stringifyResponse('order', initialData.find(order => order.id === Number(id)));
                });

                // --- update order

                this.post("api/updateOrder/", (schema, request) => {
                    let attrs = JSON.parse(request.requestBody);
                    const order = initialData.find(order => order.id === Number(attrs.id));
                    order.person = attrs.person;
                    order.state = attrs.state;
                    return stringifyResponse('order', order)
                })

                // --- states

                this.get("/api/states", (schema) => {
                    return JSON.stringify({
                        states: states
                    });
                });

                // --- sort

                this.post("/api/sort", (schema, request) => {
                    let attrs = JSON.parse(request.requestBody);
                    const comparer = getComparer(attrs.sortParam, attrs.sortDirection);
                    initialData.sort(comparer)
                    return stringifyResponse('orders', initialData)
                })

                // --- delete

                this.post("/api/delete", (schema, request) => {
                    let attrs = JSON.parse(request.requestBody);

                    attrs.selectedRows.forEach(
                        e => {
                            let i = initialData.findIndex(item => item.id === Number(e));
                            if (i != -1) {
                                initialData.splice(i, 1);
                            }
                        }
                    );

                    return stringifyResponse('orders', initialData)
                })

                // --- filter

                this.post("/api/filterNoOrPerson", (schema, request) => {
                    let attrs = JSON.parse(request.requestBody);
                    if (attrs.value) {
                        const filtered = initialData.filter((item) => (item.person.startsWith(attrs.value) || (item.id.toString().startsWith(attrs.value))));
                        return stringifyResponse('orders', filtered)
                    }
                    return stringifyResponse('orders', initialData)
                })


                this.post("/api/panelFilters", (schema, request) => {
                    let attrs = JSON.parse(request.requestBody);
                    if (
                        (!attrs.dateFrom) &&
                        (!attrs.dateTo) &&
                        (attrs.filterOrderStates.length === 0) &&
                        (!attrs.summaFrom) &&
                        (!attrs.summaTo)
                    )
                        return stringifyResponse('orders', initialData);

                    let filtered;
                    const dateFrom = new Date(attrs.dateFrom);
                    const dateTo = new Date(attrs.dateTo);

                    if (attrs.dateFrom)
                        filtered = getFilterSource(filtered).filter((item) => (((item.date).getTime() - dateFrom.getTime()) >= 0));

                    if (attrs.dateTo)
                        filtered = getFilterSource(filtered).filter((item) => (((item.date).getTime() - dateTo.getTime()) <= 0));

                    if (attrs.filterOrderStates.length != 0)
                        filtered = getFilterSource(filtered).filter((item) => attrs.filterOrderStates.includes(item.state));

                    if (attrs.summaFrom)
                        filtered = getFilterSource(filtered).filter((item) => item.summa >= parseFloat(attrs.summaFrom));

                    if (attrs.summaTo)
                        filtered = getFilterSource(filtered).filter((item) => item.summa <= parseFloat(attrs.summaTo));

                    const result = filtered.slice();
                    filtered = null;

                    return stringifyResponse('orders', result)
                })

            }
        }
    );


    return server;
}
