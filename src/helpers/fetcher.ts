export const imgFetcher = (url:RequestInfo | URL, options?: RequestInit) => fetch(url, options).then(res => {
    if (res.ok) {
        return res.blob();
    }
    throw new Error(`Failed to fetch ${url}`);
});
