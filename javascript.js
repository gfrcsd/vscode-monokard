function func(param) {
    var text = 'string';
    for (var i=0; i < param.lenght; i++) {
        text += i;
    }
    return {
        "text": text,
        "boolean": false
    };
}
