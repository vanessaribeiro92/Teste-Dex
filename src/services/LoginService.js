export function LoginService(data){
    let url = new URL("http://localhost:1337/parse/login");

    url.search = new URLSearchParams({
        username: data.email,
        email: data.email,
        password: data.password
    });

    return new Promise((resolve, reject) => {
        fetch(url, {
            headers: {
                'Content-type': 'application/json',
                'X-Parse-Application-Id': 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga'
            }
        }).then(response => {
            return response.json();
        }).then(responseJson => {
            resolve(responseJson);
        }).catch(error => {
            reject(error);
        });
    });
}