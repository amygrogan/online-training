/* **** 
   MEDIATOR 
   - behavioral pattern - idea is to have a mediator which is basically an interface for communicating with colleagues, which are just mediated objects. Ex: chat room
**** */

const User = function(name) {
    this.name = name;
    this.chatroom = null;

}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; //list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // single user message
                to.receieve(message, from);
            } else {
                // mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receieve(message, from);
                    }
                }
            }
        }
    }
}

const brad = new User('brad');
const amy = new User('amy');
const sara = new User('sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(amy);
chatroom.register(sara);

brad.send('hello amy', amy);
sara.send('hello brad, how are you?!', brad);
amy.send('hello everyone');