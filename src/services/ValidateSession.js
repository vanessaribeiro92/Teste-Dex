export function ValidateSession(){
    
    let url = new URL("http://localhost:1337/parse/users/me");

    return new Promise((resolve, reject) => {
        fetch(url, {
            headers: {
                'X-Parse-Application-Id': 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
                'X-Parse-Session-Token': sessionStorage.getItem('X-Parse-Session-Token')
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