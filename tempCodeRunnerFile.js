conn.query( commund_1, (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})