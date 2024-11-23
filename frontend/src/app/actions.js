const BACKEND_PORT = 8080;
const FRONTEND_PORT = 3000;

// submit new outing form
export async function submitFormNew(prevState, formData) {

    

    // get form fields in json format
    const inputs = {
        "newGroupName": formData.get('new-group-name'),
        "newAdminName": formData.get('new-admin-name'),
        "newAdminPass": formData.get('new-admin-pass'),
    }
    
    // send request to appropriate backend endpoint
    const response = await fetch(`http://localhost:${BACKEND_PORT}/api/new`, {
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
        "joinCode": formData.get('join-code'),
        "newUserName": formData.get('new-user-name'),
        "newUserPass": formData.get('new-user-pass'),
    }

    // send request to appropriate backend endpoint
    const response = await fetch(`http://localhost:${BACKEND_PORT}/api/join`, {
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
        "groupCode": formData.get('group-code'),
        "name": formData.get('name'),
        "pass": formData.get('pass'),
    }

    // send request to appropriate backend endpoint
    const response = await fetch(`http://localhost:${BACKEND_PORT}/api/login`, {
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