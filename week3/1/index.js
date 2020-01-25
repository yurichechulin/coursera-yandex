/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (str) {
    var objTime = {
        init: function(str) {
            if (str instanceof Date) {
                this.val = str;
            }
            else {
                var arr = str.split(/[\s:-]/);
                this.val = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], 0, 0));
            }
            return this;
        },
        
        method: {
            "years": "FullYear",
            "months": "Month",
            "days": "Date",
            "hours": "Hours",
            "minutes": "Minutes"
        },

        add: function(qty, interval) {
            this.validate(qty, interval);
            this.setValue(qty, this.method[interval]);
            return this;
        },

        subtract: function(qty, interval) {
            this.validate(qty, interval);
            this.setValue(-qty, this.method[interval]);
            return this;
        },

        setValue: function(qty, method){
            this.val["setUTC" + method](qty + this.val["getUTC" + method]());
            return this;
        },

        validate: function(qty, interval) {
            if (!(interval in this.method) || (qty < 0)) {
                throw new TypeError;
            }
        },
        get value() {
            var year = this.val.getUTCFullYear();
            var month = this.val.toLocaleString("ru",{timeZone : "UTC",month: '2-digit'});
            var day = this.val.toLocaleString("ru",{timeZone : "UTC",day: '2-digit'});
            var time = this.val.toLocaleString("ru",{timeZone : "UTC", hour: '2-digit', minute: '2-digit' });
            return year + "-" + month + "-" + day + " " + time;          
        }
    
    }
    return objTime.init(str);
};