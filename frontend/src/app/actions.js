export async function submitFormLogin(prevState, formData) {

    const inputs = {
        "group-code": formData.get('group-code'),
        "name": formData.get('name'),
        "pass": formData.get('pass'),
    }

    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    const result = await response.json();
    const message = result.message;

    return message;
}

export async function submitFormJoin(prevState, formData) {

    const inputs = {
        "join-code": formData.get('join-code'),
        "new-user-name": formData.get('new-user-name'),
        "new-user-pass": formData.get('new-user-pass'),
    }

    const response = await fetch('http://localhost:8080/join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    const result = await response.json();
    const message = result.message;

    return message;
}

export async function submitFormNew(prevState, formData) {

    const inputs = {
        "new-group-name": formData.get('new-group-name'),
        "new-admin-name": formData.get('new-admin-name'),
        "new-admin-pass": formData.get('new-admin-pass'),
    }

    const response = await fetch('http://localhost:8080/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    const result = await response.json();
    const message = result.message;

    return message;
}