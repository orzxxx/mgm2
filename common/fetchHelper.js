export function jsonSerialize(obj){
    var body = [];
    Object.keys(obj).forEach(prop => {
        var encodedKey = encodeURIComponent(prop);
        var encodedValue = encodeURIComponent(obj[prop]);
        body.push(encodedKey + "=" + encodedValue);
    });
    return body.join("&");
}
