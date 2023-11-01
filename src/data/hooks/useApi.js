import { useState, useEffect } from "react";
import ApiService from "../services/api.service";

export default function useApi ({ method, url, axiosInstance = ApiService, params = {} }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axiosInstance[method.toLowerCase()](url, {
                    ...params,
                });
                setData(data);
            } catch (err) {
                console.log(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [axiosInstance, method, params,url]);

    return [data, loading, error];
}