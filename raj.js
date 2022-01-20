let names =[
    /*'“I had no talent for science. What was infinitely worse: all my fraternity brothers were engineers.”',
    '“Math is my Passion. Engineering is my Profession.”',
    '“Normal people believe that if it ain’t broke, don’t fix it. Engineers believe that if it ain’t broke, it doesn’t have enough features yet.”',
    '“The most important thing is to keep the most important thing the most important thing.”',
    '“I’m an engineer by trade, and what engineers do is they go and build, and they don’t think a lot about storytelling.”',
     '“What’s nice about having an engineering degree is everybody thinks you are smart.”',
     '“The scientist discovers a new type of material or energy and  we discovers a new use for it.”',
     '“When i want to know how things really work, study them when they’re coming apart.”',   */
     '“Train your mind to see the good in every situation.” ',
     ' “If you can stay positive in a negative situation, you win.” ',
     '“Stay positive. Better days are on their way.”',
     ' “Only in the darkness can you see the stars.',
     '“Each day provides its own gifts.”',
     '“You do not find the happy life. You make it.” ',
     '“The most wasted of days is one without laughter.”',
     '“Try to be a rainbow in someone’s cloud.”',
     '“Surround yourself with positive people.”',
     ' “The power of imagination makes us infinite.” ',
     ' “Do good and good will come to you.”',

     

    
];


function showName(){
    
    var pyc= document.getElementById('neck').value;
    if(pyc ==""){
        alert('Fill Name');
    }
    



    let randomQuot= Math.floor(Math.random()*names.length);
   

   document.getElementById('new').innerHTML = `BY-${pyc}:-  ${names[randomQuot]}`;
}