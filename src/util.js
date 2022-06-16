export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase()
    const req = url.split('/')

    return {
        resource: req[1],
        id: req[2],
        action: req[3]
    }
}