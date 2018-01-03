async function errHandler(res) {
    const body = await res.json();

    alert(body.message);

    return {status: res.status}
}

export const get = async (url) => {
    try {
        const res = await fetch(url, {
            method: "GET",
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json;charset=utf-8',
                'Content-Type': 'application/json'
            })
        });

        if (!res.ok) {
            return errHandler(res)
        }
        const body = await res.json();
        const status = res.status;

        return Object.assign({}, {body}, {status})
    } catch (ex) {

        return {status: ex.status}
    }
};


export const del = async (url) => {
    try {
        const res = await fetch(url, {
            method: "DELETE",
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json;charset=utf-8'
            })
        });

        const body = await res.json();
        const status = res.status;

        return Object.assign({}, {body}, {status})
    } catch (ex) {

        return {status: ex.status}
    }
};

export const post = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: "POST",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            return errHandler(res)
        }

        const body = await res.json();
        const status = res.status;

        return Object.assign({}, {body}, {status})
    } catch (ex) {

        return {status: ex.status}
    }
};

export const update = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: "PUT",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            return errHandler(res)
        }

        const body = await res.json();
        const status = res.status;

        return Object.assign({}, {body}, {status})
    } catch (ex) {

        return {status: ex.status}
    }
};