class Media{
  
  
  constructor(title){
    
    this._title=title;
    this._isCheckedOut=false;
    this._ratings=[];
    
    
  }
  
  
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  
  set isCheckedOut(value){
    this._isCheckedOut=value;
  }
  
  toggleCheckOutStatus(){
    
    this.isCheckedOut=!this.isCheckedOut;
    
  }
  
  AverageRating(){
    
    let sumOFAll=this.ratings.reduce((accumulator,currentValue)=>
       accumulator+currentValue);
         
    return sumOFAll/this.ratings.length;
    
    
  }

  addRating(rating){
    
    let loweClampedValue=Math.max(rating,1);
    let clampedValue=Math.min(loweClampedValue,5);
    this.ratings.push(clampedValue);
  }
  
}

// const a = new Media('Abc');
// console.log(a.title);
// console.log(a.isCheckedOut);
// console.log(a.toggleCheckOutStatus());
// console.log(a.isCheckedOut);

// console.log(a.addRating(5));
// console.log(a.addRating(5));
// console.log(a.addRating(5));
// console.log(a.AverageRating());

class Book extends Media{
  
  constructor(author,title,pages){
    super(title);
    this._author=author;
    this._pages=pages;
  }
  
  get author(){
    return this._author;
  }
  get pages(){
    return this.pages;
  }  
}

class Movie extends Media{
 
  constructor(director,title,runtime,movieCast){
    super(title);
    this._director=director;
    this._runtime=runtime;
    this._movieCast=movieCast;
    
  }
  
  get director(){
    return this._director;
  }
  get runtime(){
    return this._runtime;
  }
  
  get movieCast(){
    return this._movieCast;
  }
  
  
}


class CD extends Media{
  
  constructor(artist,title,songs){
    super(title);
    this._artist=artist;
    this._songs=songs;
  }
  get artist(){
    return this._artist;
  }
  
  get songs(){
    return this._songs;
  }
  
  addSongs(song){
    this._songs.push(song);
  }
  
  shuffle(){
    let randomIndex;
    let temp;
    for(let i=0;i<this.songs.length;i++){
    randomIndex=Math.floor(Math.random()*this.songs.length);
      temp=this.songs[i];
      this.songs[i]=this.songs[randomIndex];
      this.songs[randomIndex]=temp;
        
      }
  }
  
}



class Catalog{
  
  constructor(){
    this._MyCatalog=[]
  }
  
 get myCatalog(){
   return this._MyCatalog;
 }
  
  set myCatalog(setMediaList){

    this._MyCatalog.push(setMediaList);
  
  }
  
}



const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.AverageRating());

const speed = new Movie('Jan de Bont','Speed',166,['Jhon','Bruce','Michel','Adam']);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.AverageRating());
console.log(speed.movieCast);

const Enrique = new CD("Enrique","insomniac",["Push","On top of you","Little girl"]);
Enrique.toggleCheckOutStatus();
console.log(Enrique.isCheckedOut);
Enrique.addRating(10);//this value will be clamped to 5
Enrique.addRating(10);//this value will be clamped to 5
Enrique.addRating(10);//this value will be clamped to 5
console.log(Enrique.AverageRating());
console.log(Enrique.songs);
Enrique.addSongs('Miss you');
console.log(Enrique.songs);
Enrique.shuffle();
console.log(Enrique.songs);




const catalog1= new Catalog();
catalog1.myCatalog=historyOfEverything;
catalog1.myCatalog=speed;
catalog1.myCatalog=Enrique;
console.log(catalog1.myCatalog);