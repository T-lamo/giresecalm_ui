/*"fonction_id": 1,
"username": "tlamo",
"password": "pbkdf2_sha256$260000$d26RDGjLQLNZnjhVDXdG97$lfE7BiXH50J3QIkIBTFRSpzx5BfLRdF5G/9F2n6RaW0=",
"first_name": "",
"last_name": "",
"email": "amosdorceus2010@gmail.com",
"telephone": null,
"is_staff": 1,
"is_active": 1,
"date_joined": "2021-06-03T11:46:48.365850Z",
"is_superuser": 1, */
export class Ong {
    username: string;
    first_name: string;
    last_name: string;
    email:string;



    statut: any;
    constructor(username:string, first_name:string, last_name:string, email:string) {
        this.username =username;
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
    }
  }