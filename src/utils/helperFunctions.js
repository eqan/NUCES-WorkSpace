function isEmpty(obj) {
    if( Object.keys(obj).length === 0)
        return true;
    return false;
}

function throwError(err)
{
    if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
    }
}

module.exports = {isEmpty, throwError};