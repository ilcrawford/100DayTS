interface Recipient {
    email: string;
}

interface Email {
    To: Recipient[] | null;
    CC: Recipient[] | null;
    BCC: Recipient[] | null;
    Subject: string;
    Message: string;
}

function SendMessage(message: Email) {
    console.log(message);
}

const email: Email = {
    To: [{ email: 'bob@bob.com' }],
    CC: [{ email: 'terry@terry.com' }],
    BCC: null,
    Subject: 'Test email',
    Message: 'Test message'
}

SendMessage(email);