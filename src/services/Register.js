export function Register(data){
    let url = new URL("http://localhost:1337/parse/users");
    const object = JSON.stringify({"username":data.email,"password":data.password, "email": data.email});
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": "OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga",
                "X-Parse-Revocable-Session": "1",
                "Content-Type": "application/json"
            },
            body: object
        }).then(response => {
            return response.json();
        }).then(responseJson => {
            resolve(responseJson);
        }).catch(error => {
            reject(error);
        });
    });
}