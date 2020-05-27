export const currentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;
}

export const dateEntryId = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    return today = yyyy + '-' + mm + '-' + dd;
}

export const prettyDate = () => {
    let today = new Date();
    let thisDay = String(today.getDate())
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let thisMonth = months[today.getMonth()]
    let yyyy = today.getFullYear();

    return today = thisMonth + ' ' + thisDay + ', ' + yyyy;

}

export const pretifyThisDate = date => {
    let dd = date.substring(8, 10)
    let mm = date.substring(6, 7)
    let yyyy = date.substring(0, 4)
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let thisMonth = months[parseInt(mm) - 1]
    
    return thisMonth + ' ' + dd + ', ' + yyyy;
}

export const simplifyThisDate = date => {
    let dd = date.substring(8, 10)
    let mm = date.substring(6, 7)
    let yy = date.substring(2, 4) 
    return parseInt(mm) + '/' + parseInt(dd) + '/' + yy;
}