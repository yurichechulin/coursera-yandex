module.exports = {

    _events: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!this._events.hasOwnProperty(event)) {
            this._events[event] = [];
        }

        this._events[event].push({
            subscriber: subscriber,
            handler: handler});

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        Object.keys(this._events).forEach(function (currentEvent) {
            if (currentEvent === event) {
                var listeners = this._events[currentEvent];
                this._events[currentEvent] = listeners.filter(function (listener) {
                    return listener.subscriber !== subscriber;
                });
            }
        }, this);

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (this._events[event] !=undefined){
            for (var i = 0; i < this._events[event].length; i++) {
                var sub = this._events[event][i];
                if (sub.subscriber != undefined
                    && sub.handler != undefined) {
                        sub.handler.call(sub.subscriber);
                    }
                
            }
        }
        

        return this;
        
    }
};
