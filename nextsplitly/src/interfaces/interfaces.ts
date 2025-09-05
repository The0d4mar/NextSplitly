export interface UserProps{
    id: number;
    name: string;
    secondName: string;
    registerData: string;

}

export interface UserStoreProps{
    activeUser: UserProps;
    listOfUser: UserProps[]
}