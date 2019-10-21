export function LogoutService(data){
    let url = new URL("http://localhost:1337/parse/logout");
    return new Promise((resolve, reject) => {
        fetch(url, {
            method:'POST',
            headers: {
                'X-Parse-Application-Id': 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
                'X-Parse-Session-Token': data
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