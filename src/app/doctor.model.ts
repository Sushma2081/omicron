export class doctor{
    public timeslotid:number;
    public dayofweek:number;
    public starttime:number;
    public endtime:number;
    public status1:Boolean=true;
    
    constructor(timeslotid:number,dayofweek:number,starttime:number,endtime:number,status1:boolean){
        this.timeslotid=timeslotid;
        this.dayofweek=dayofweek;
        this.starttime=starttime;
        this.endtime=endtime;
        this.status1=status1;

    }
    

}