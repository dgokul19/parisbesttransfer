
export const dateHelper = (date) => {
    if(!date) return '-';

    return new Date(date).toLocaleString("en-US", {
        day : 'numeric',
        month : 'long',
        year :  'numeric'
    })
};


export const handleDateFormat = (date = new Date()) => {
    date = new Date(date);
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if(month <= 9){
        month = '0'+month;
    }

    if(day <= 9){
        day = '0'+day;
    }
    return `${date.getFullYear()}-${month}-${day}`
};

export const handleTimeFormat = (date = new Date()) => {
    date = new Date(date);
    let hours = date.getHours();
    let time = date.getMinutes();

    return `${String(hours).padStart(2, "0")}:${String(time).padStart(2, "0")}`;
};

