
export const dateHelper = (date) => {
    if(!date) return '-';

    return new Date(date).toLocaleString("en-US", {
        day : 'numeric',
        month : 'long',
        year :  'numeric'
    })
};