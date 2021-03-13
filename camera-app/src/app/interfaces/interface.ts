export interface Register {
    name: string;
    contact: string;
    email: string;
    password: string;
    dateofbirth: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Imagesave {
    userid: string;
    imageurl: string;
    date: string;
    storagedel: string;
}

export interface Img {
    userid: string;
    picture: string;
    delid: string;
    uploadDate: string;
    storageid: string;
}

export interface Search {
    userid: string;
    date: string;

}

export interface UserProfile {
    id: string;
    DateofBirth: string;
    Name: string;
    Contact: string;
    Email: string;

}
