"use strict";
function SendMessage(message) {
    console.log(message);
}
var email = {
    To: [{ email: 'bob@bob.com' }],
    CC: [{ email: 'terry@terry.com' }],
    BCC: null,
    Subject: 'Test email',
    Message: 'Test message'
};
SendMessage(email);
