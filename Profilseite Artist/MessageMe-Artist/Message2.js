import { Chat } from 'vue-quick-chat'
export default {
    components: {
        Chat
    },
    data(){
        return {
            participants: [
                {
                    name: 'Metin',
                    id: 1
                },
                {
                    name: 'Laura',
                    id: 2
                }
            ],
            myself: {
                name: 'Sabrina',
                id: 3
            },
            messages: [
                {
                    content: 'received messages',
                    myself: false,
                    participantId: 1,
                    timestamp: { year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 }
                },
                {
                    content: 'sent messages',
                    myself: true,
                    participantId: 3,
                    timestamp: { year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond:123 }
                },
                {
                    content: 'other received messages',
                    myself: false,
                    participantId: 2,
                    timestamp: { year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123 }
                }
            ],
            chatTitle: 'My chat title',
            placeholder: 'send your message',
            colors:{
                header:{
                    bg: '#8a8982',
                    text: '#fff'
                },
                message:{
                    myself: {
                        bg: '#fff',
                        text: '#bdb8b8'
                    },
                    others: {
                        bg: '#8a8982',
                        text: '#fff'
                    }
                },
                submitIcon: '#8a8982'
            },borderStyle: {
                topLeft: "10px",
                topRight: "10px",
                bottomLeft: "10px",
                bottomRight: "10px",
            },
            hideCloseButton: false,
            submitIconSize: "20px",
            closeButtonIconSize: "20px"
        }
    },
    methods: {
        onType: function (event){
            //here you can set any behavior
        },
        onMessageSubmit: function(message){
            //here you can set any behavior
        }
    }