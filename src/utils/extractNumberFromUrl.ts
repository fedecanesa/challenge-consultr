export function extractNumberFromUrl(url: string) {
    const match = url.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : 0;
}
