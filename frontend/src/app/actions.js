// submit new outing form
export async function submitFormNew(prevState, formData) {

    // get form fields in json format
    const inputs = {
        "new-group-name": formData.get('new-group-name'),
        "new-admin-name": formData.get('new-admin-name'),
        "new-admin-pass": formData.get('new-admin-pass'),
    }
    
    // send request to appropriate backend endpoint
    const response = await fetch('http://localhost:8080/api/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });
    
    // get the response in json format
    const result = await response.json();
    // get message from response
    const message = result.message;

    // be able to display on page
    return message;
}

// submit join form
export async function submitFormJoin(prevState, formData) {
    // get form fields in json format
    const inputs = {
        "join-code": formData.get('join-code'),
        "new-user-name": formData.get('new-user-name'),
        "new-user-pass": formData.get('new-user-pass'),
    }

    // send request to appropriate backend endpoint
    const response = await fetch('http://localhost:8080/api/join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    // get the response in json format
    const result = await response.json();
    // get message from response
    const message = result.message;

    // be able to display on page
    return message;
}

// submit login form
export async function submitFormLogin(prevState, formData) {
    // get form fields in json format    
    const inputs = {
        "group-code": formData.get('group-code'),
        "name": formData.get('name'),
        "pass": formData.get('pass'),
    }

    // send request to appropriate backend endpoint
    const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });

    // get the response in json format
    const result = await response.json();
    // get message from response
    const message = result.message;

    // be able to display on page
    return message;
}