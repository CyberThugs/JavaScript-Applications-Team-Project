import $ from "jquery"

const KinveyRequester = (function() {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_HJ-b3oNQg";
    const appSecret = "d6c07af17c834bc0a5ad73e7a3edbca2";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function registerUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }



    // function getKinveyUserAuthHeaders() {
    //     return {
    //         'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
    //     };
    // }

    return {
        loginUser, registerUser
    }
})();

export default KinveyRequester;