import {belongsTo, createServer, Factory, hasMany, Model} from "miragejs"
import React from "react";
import {GenerateData} from "../components/DataGenerator/DataGenereator";
import {states} from "./states";
import {getComparer, getComparerAsc, getComparerDesc} from "./sort";


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

                // --- fetch data

                this.get("/api/data", () => {
                    return stringifyResponse('orders', initialData);
                });

                // --- sort

                this.post("/api/sort", (schema, request) => {

                    let attrs = JSON.parse(request.requestBody);
                    alert(JSON.stringify(attrs));
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

                    if (attrs.dateFrom)
                        filtered = getFilterSource(filtered).filter((item) => (((item.date).getTime() - attrs.dateFrom.getTime()) >= 0));

                    if (attrs.dateTo)
                        filtered = getFilterSource(filtered).filter((item) => (((item.date).getTime() - attrs.dateTo.getTime()) <= 0));

                    if (attrs.filterOrderStates.length != 0)
                        filtered = getFilterSource(filtered).filter((item) => attrs.filterOrderStates.includes(item.state))

                    if (attrs.summaFrom)
                        filtered = getFilterSource(filtered).filter((item) => item.summa >= parseFloat(attrs.summaFrom))

                    if (attrs.summaTo)
                        filtered = getFilterSource(filtered).filter((item) => item.summa <= parseFloat(attrs.summaTo))

                    return stringifyResponse('orders', filtered)
                })


                this.get("/api/states", (schema) => {
                    return JSON.stringify({
                        states: states
                    });
                });
            }
        }
    );


    return server;
}

const getRandomFromArray = (a) => {
    return a[Math.floor(Math.random() * a.length)]
}

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

