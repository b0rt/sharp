import axios from 'axios';
import qs from 'qs';
import { API_PATH } from "./consts";

export const api = axios.create({
    baseURL: API_PATH,
    paramsSerializer: params => qs.stringify(params),
});

export function getDashboard({ dashboardKey, filters }) {
    return api.get(`dashboard/${dashboardKey}`, {
        params: {
            ...filters,
        },
    }).then(response => response.data);
}

export function postDashboardCommand({ dashboardKey, commandKey, query, data }) {
    return api.post(`dashboard/${dashboardKey}/command/${commandKey}`, {
        query,
        data,
    }, { responseType: 'blob' });
}

export function getDashboardCommandFormData({ dashboardKey, commandKey, query }) {
    return api.get(`dashboard/${dashboardKey}/command/${commandKey}/data`, {
        params: {
            ...query,
        },
    }).then(response => response.data.data);
}

export function postEntityListReorder({ entityKey, instances }) {
    return api.post(`list/${entityKey}/reorder`, { instances });
}

export function getGlobalFilters() {
    return api.get(`filters`).then(response => response.data);
}

export function postGlobalFilters({ filterKey, value }) {
    return api.post(`filters/${filterKey}`, { value });
}