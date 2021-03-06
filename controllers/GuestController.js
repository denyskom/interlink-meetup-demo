const Guest = require('../models/Guest');

class GuestController  {
    find() {
        return Guest.find();
    }

    create(guest) {
        return Guest.create(guest);
    }

    findById(id) {
        return Guest.findById(id);
    }

    removeById(id) {
        return Guest.findByIdAndRemove(id);
    }

    updateById(id,body) {
        return Guest.findByIdAndUpdate(id,body,{new: true});
    }

}

module.exports = new GuestController();