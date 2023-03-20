const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        indexActiveChat : 0,
        textMessage: '',
        newMessage: {
            date: '',
            message: '',
            status: 'sent',
        },
        receivedMessage: {
            date: '',
            message: '',
            status: 'received',
        },
        searchText: '',
        currentContact: null,
        randomMessage: ['Scusami domani lavoro', 'Ok, questa sera ci sono', 'Non mi  funziona il telefono'],
      }
    },

    methods :{
        //lunghezza array messages - 1
        lengthMessage(){
            return this.contacts[this.indexActiveChat].messages.length - 1;
        },
        //Click sul contatto mostra la conversazione del contatto cliccato
        changeChat(contact, index) {
            this.indexActiveChat = index;
        },
        //Aggiunta di un messaggio: l’utente scrive un testo 
        //nella parte bassa e digitando “enter” 
        //il testo viene aggiunto al thread sopra, come messaggio verde
        sendMessage(mic, paper) {
            if(this.textMessage != '' && this.textMessage != " " && this.textMessage != "  "){
                let newChatMessage = this.contacts[this.indexActiveChat].messages;
                let newReceivedMessage = this.receivedMessage;
                //creiamo data aggiornata
                const currentDate = new Date();
                const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}`;
                // Aggiungere la data e l'ora corrente al nuovo messaggio
                this.newMessage.date = formattedDate;
                this.receivedMessage.date = formattedDate;
                newReceivedMessage.message = this.randomMessage[Math.floor(Math.random() * this.randomMessage.length)];
                //Aggiungere stringa dentro l'input
                this.newMessage.message = this.textMessage;
                //inserire nell'array di messages il nuovo messagio
                newChatMessage.push(this.newMessage);
                //aggiungere all'array risposta
                setTimeout(function(){
                    newChatMessage.push(newReceivedMessage);
                }, 1000);
                
                this.newMessage = {
                    date: '10/01/2020 15:50:00',
                    message: '',
                    status: 'sent',
                };
                this.receivedMessage= {
                    date:'',
                    message: 'Ok',
                    status: 'received',
                };
                this.textMessage = '';
                this.lengthMessage();
                const mic = document.getElementById("microphone");
                const paper = document.getElementById("paper-send");
                paper.style.display= "none";
                mic.style.display= "block";
            };
        },
        //Ricerca utenti: scrivendo qualcosa nell’input a sinistra, 
        //vengono visualizzati solo i contatti 
        //il cui nome contiene le lettere inserite
        searchContact() {
            let newSearch = this.searchText.toLowerCase();
            this.contacts.forEach((contact,index) => {
                
                if(newSearch == ''){
                    contact.visible = true;
                    
                }else if(contact.name.toLowerCase().includes(newSearch)){
                    contact.visible = true;
                }else{
                    contact.visible = false;
                };
            });        
        },
        // cliccando sul messaggio appare un menu a tendina
        // che permette di cancellare il messaggio selezionato
        deleteMessage(messsage, index) {
            if(this.contacts[this.indexActiveChat].messages.length <= 1){
                this.contacts.splice(this.contacts[this.indexActiveChat], 1)
            }else{
                this.currentContact = this.contacts[this.indexActiveChat].messages
                this.currentContact.splice(index, 1);
            }
        },

        dateMessage(index) {
           return this.contacts[this.indexActiveChat].messages[index].date.slice(11, 16);
        },

        changeIcon() {
            if(this.textMessage != ''){
                const mic = document.getElementById("microphone");
                const paper = document.getElementById("paper-send");
                paper.style.display= "block";
                mic.style.display= "none";
            }else{
                const mic = document.getElementById("microphone");
                const paper = document.getElementById("paper-send");
                paper.style.display= "none";
                mic.style.display= "block";
            };
        },
        

    }
  }).mount('#app')