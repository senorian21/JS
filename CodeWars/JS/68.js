String.prototype.isUpperCase = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== this[i].toUpperCase()) {
            return false;
        }
    }
    return true;
}