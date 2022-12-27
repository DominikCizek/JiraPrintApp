export function formatDate(string){
    const rawDate = new Date(string);
    let days = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'];
    let dayName = days[rawDate.getDay()];
    return `${dayName} - ${rawDate.getDate()}.${rawDate.getMonth()+1}.`
}