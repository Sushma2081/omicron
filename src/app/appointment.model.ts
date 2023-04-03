export class appointmentt{
    public appointmentid:number;
    public fromtime:Date;
    public totime:Date;
    public status1:Boolean=true;
    
    constructor(appointmentid:number,fromtime:Date,totime:Date,status1:boolean){
        this.appointmentid=appointmentid;
        this.fromtime=fromtime;
        this.totime=totime;
        this.status1=status1;

    }
    

}