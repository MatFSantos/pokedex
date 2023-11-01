import useApi from "./useApi";

export function useGetApi ({ url }){
    const res  = useApi({
        method: "get",
        url
    });
    return res;
}