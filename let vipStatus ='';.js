let vipStatus ='';
let guest = {
    name:'Sarah',
    age: 21
    ticket: true,
    get ticket() {
        return this.ticket;
    },
    set ticket(value) {
        this.ticket = value;
    },
    guestType: 'artist'
};
switch (guest.guestType) {
    case 'artist':
        vipStatus='Normal';
    case 'star':
        vipStatus='Important';
        break
    case 'presidental':
        vipStatus='Mega';
}