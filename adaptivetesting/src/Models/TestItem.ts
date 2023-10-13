export class TestItem{

    
    public word!:string;
    public Difficulty!: number;
    public EstErrorIntercept!:number;
    public Q25Intercept!:number;
    public Q975Intercept!:number;
    
    //math
    

    public constructor(Difficulty ?:number){
        if(Difficulty != undefined){
            this.Difficulty = Difficulty;
        }
    }

}