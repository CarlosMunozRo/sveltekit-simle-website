export async function load({ params, url }) {
    let q = url.searchParams.get('v');
    return { q };
}
