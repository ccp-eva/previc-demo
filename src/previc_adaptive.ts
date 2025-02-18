import wordData from './backend/wordData';
import * as Swing from 'swing';
import { AdaptiveTest, TestItem } from 'adaptivetesting';
import { Word } from "./backend/Word";
import { AbilityCorrection } from './backend/AbilityCorrection';
import { Items } from './backend/ItemsType';

class AdaptivePREVICTest {
  //properties
  public counter:HTMLElement;
  public buttonNo:HTMLElement;
  public buttonYes:HTMLElement;
  public stack:HTMLElement;
  public cards:HTMLElement;
  public dialog:HTMLDialogElement;

  test:AdaptiveTest;
  data:Word[];
  

  item_counter:number;
  item:TestItem|null = null;

  se_selection?:number;

  constructor() {
    //Initilization of properties
    this.counter = document.getElementById('counter')!;
    this.buttonNo = document.getElementById('button-no')!;
    this.buttonYes = document.getElementById('button-yes')!;

    // An instance of the Stack is used to attach event listeners.
    this.stack = Swing.Stack();

    // get html element for UL for words
    this.cards = document.getElementById('stack')!;
    //create adaptive test
    this.test = new AdaptiveTest();
    //load data
    this.data = JSON.parse(wordData());

    //setup item counter
    this.item_counter = 0;

    //add event listener for keys
    document.addEventListener('keydown', (e) => {
      e = e || window.event;
      if (e.key === 'ArrowLeft') {
        this.handleNoClick(e);
      } else if (e.key === 'ArrowRight') {
        this.handleYesClick(e);
      }
    });

    //add event listener for buttons (left and right)
    this.buttonNo.addEventListener('click', this.handleNoClick, { capture: true });
    this.buttonYes.addEventListener('click', this.handleYesClick, { capture: true });

    // Add event listener for when a card is thrown out of the stack.
    (this.stack as any).on('throwout', (e:any) => {
      const response =
        e.throwDirection.description === 'LEFT' ? 0 : 1;

        this.UpdateTest(response);
    });

    //init dialog
    this.dialog = document.getElementById("dialog") as HTMLDialogElement;


    //get se selection
    this.getSeSelection();
    //run test for the first time
    this.RunTest();
  }

  /**
   * This function will present the user with a new item
   * and set the ability level and the standard error to their current values.
   */
  RunTest() {
    //load item
    this.item = this.test.GetNextItem();
    const item_index = this.data.findIndex((i:any) => {
      if (i.word == this.item!.word) {
        return true;
      }
    });

    //show item to user
    const newLI = document.createElement('li');
    newLI.classList.add(`${this.data[item_index].pos}`);
    newLI.appendChild(document.createTextNode(this.data[item_index].word));
    this.cards.appendChild(newLI);
    (this.stack as any).createCard(newLI);


    
    this.counter.textContent = `Bisher haben Sie ${this.item_counter} Wörter beantwortet.`;
    

  }

  /**
   * This function is triggered by the event listeners.
   * It saves the reponse, updates the ability estimation
   * and removes the item from the user interface.
   * It also checks whether the condition to stop the test is met.
   * @param {*} response 
   */
  UpdateTest(response:number) {
    //remove item from UI
    (this.cards as any).lastElementChild.remove();
    
    
    //update test
    //add response to response pattern
    this.test.ResponsePattern.push(response);
    //add item to answered items array
    this.test.AnsweredItems.push(this.item!);
    //remove item from item pool
    const item_index = this.test.Items.findIndex((i) => {
      if (i.word == this.item!.word) {
        return true;
      }
    });
    this.test.Items.splice(item_index, 1);

    //update ability level
    const estimator = new AbilityCorrection();
      
      try{
        this.test.AbilityLevel = estimator.GetMaximumLikelihoodEstimation(
          this.test.ResponsePattern, this.test.ItemDifficulties
        );
      }
      catch(e){
        console.debug(e);
      }
      
    //check condition
    //test will stop if desired se has been achieved or
    //all items have been presented to the participant
    if (this.test.AbilitySE > this.se_selection! && this.test.Items.length != 0) {
      //continue the test
      this.item_counter++;
      this.RunTest();
    }
    else {
      this.endTest();      
    }
  }

  /**
   * Prepares data, downloads blob and redirects
   * to goodbye page
   */
  endTest(){
    let location = (document.location as unknown) as string;
      const ID = new URL(location).searchParams.get("ID"); 

      // drop additional properties (item parameter CI) from answered items
      const answered_items: Items[] = this.test.AnsweredItems.map(
        ({word, Difficulty}) => ({word, Difficulty})
      );
      
      //save values for export
      const results_values = {
        "id": ID, 
        "final_ability_level": this.test.AbilityLevel,
        "final_se": this.test.AbilitySE,
        "answered_item": answered_items,
        "response_pattern": this.test.ResponsePattern
      };
      
      //download test results
      this.downloadTestResults(results_values);


      //go to goodbye
      setTimeout(
        () =>
          (window.location.href = `./goodbye.html`),
        1000,
      );
  }

  //event handler for left button
  handleNoClick = (e:any) => {
    this.UpdateTest(0);

  };

  //event handler for right button
  handleYesClick = (e:any) => {
    this.UpdateTest(1);

  };


  getBlobURL(blob:Blob){
    const blobUrl = URL.createObjectURL(blob);
    
    return blobUrl;
  }

  /**
   * Debug only
   * @param results 
   */
  showDialog(results:object){
    this.dialog.showModal();
    const yes_button = document.getElementById("yes_d");
    const no_button = document.getElementById("no_d");

    yes_button!.addEventListener("click", (e)=>{
      const blob = new Blob([JSON.stringify(results)], {
        type: "application/json"
      });
      const url = this.getBlobURL(blob);
      window.location.href = url;
    });

    no_button!.addEventListener("click", (e)=>{
      window.location.href = "./goodbye.html";
    })
  }


  downloadTestResults(results:object){
    const blob = new Blob([JSON.stringify(results)],
      {type: "application/json"});

    const blobUrl = window.URL.createObjectURL(blob);

    const day = new Date().toISOString().substr(0, 10);
    const time = new Date().toISOString().substr(11, 8);

    let location = (document.location as unknown) as string;
    const ID = new URL(location).searchParams.get("ID"); 

    const a = document.createElement("a");
    a.href = blobUrl;
    (a as any).download = `previc-${ID}-${day}-${time}.json`;
    a.click();
  }


  getSeSelection(){
    let location = (document.location as unknown) as string;
    let params = new URL(location).searchParams;
    let se_parameter = params.get("se");

    // Check if se_parameter is a valid number between 0.1 and 0.9
    if (se_parameter !== null) {
      const se_number = parseFloat(se_parameter);
      if (!isNaN(se_number) && se_number >= 0.1 && se_number <= 0.9) {
        this.se_selection = se_number;
      } else {
        // If se_parameter is not valid, set a default value
        this.se_selection = 0.4;
      }
    } else {
      // If se_parameter is not provided, set a default value
      this.se_selection = 0.4;
    }

    console.log(this.se_selection);
  }
}

//new instace of class to run constructur and start test
new AdaptivePREVICTest();