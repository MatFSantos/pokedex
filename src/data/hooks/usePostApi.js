import useApi from "./useApi";

export function usePostApi ({ url, params }){
    const res  = useApi({
        method: "post",
        url,
        params
    });

    return res;
}