export class Url {
    public static getParameterByName(url, name) {
        if (url === null) {
            url = window.appsvc.env.url;
        }

        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
        let results = regex.exec(url);

        if (!results) {
            return null;
        }

        if (!results[2]) {
            return '';
        }

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    public static getParameterArrayByName(url, name) {
        const value = Url.getParameterByName(url, name);
        if (value) {
            return value.split(',');
        } else {
            return [];
        }
    }
}
