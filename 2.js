const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = (a, b, c) => {
    let filterNama = name.filter(nama => nama.toLowerCase().includes(a));
    filterNama.length = b;
    return c(filterNama);
}

const callback = (key) => {
    return key;
}

console.log(searchName('an', 2, callback));