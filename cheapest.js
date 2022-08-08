const phones =
    [
        { name: 'Sumsung', camera: 12, storage: '32gb', price: 36000, color: 'siiver' },
        { name: 'walton', camera: 10, storage: '32gb', price: 22000, color: 'siiver' },
        { name: 'iphone', camera: 10, storage: '64gb', price: 82000, color: 'White' },
        { name: 'Xaomi', camera: 32, storage: '32gb', price: 52000, color: 'siiver' },
        { name: 'Oppo', camera: 10, storage: '32gb', price: 20000, color: 'silver' },
        { name: 'Nokia', camera: 10, storage: '32gb', price: 44000, color: 'black' },
        { name: 'htc', camera: 10, storage: '128gb', price: 62000, color: 'orange' }
    ];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
