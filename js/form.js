

/*javascript for other family relative*/
function showDiv(divId, element)
{
    document.getElementById(divId).style.display = element.value == 1 ? 'block' : 'none';
}



/*JavaScript for current school details

        function selectFunction() {
          var current_school_details = document.getElementById("current_school_details");
          if (document.querySelector(".form-check-input").checked === true) {
            current_school_details.style.display = "Block";
            current_school_details_two.style.display = "none";
          } else {
            current_school_details.style.display = "none";
            current_school_details_two.style.display = "Block";
          }
        }

/*test*/
        function selectFunction() {
          var current_school_details = document.getElementById("current_school_details");
          if (document.querySelector(".form-check-input1").checked === true) {
            current_school_details.style.display = "Block";
            current_school_details_two.style.display = "none";
          } else {
            current_school_details.style.display = "none";
            current_school_details_two.style.display = "Block";
          }
        }




/*javascript to duplicate add another*/

var i = 0;
var original = document.getElementById('repeatTHIS');

function repeat() {
  var clone = original.cloneNode(true);
  clone.id = "repeatTHIS1" + ++i;
  original.parentNode.appendChild(clone);
}


/*javascript to duplicate add another predicted grade*/

var x = 0;
var original2 = document.getElementById('repeatTHIStwo');

function repeat2() {
  var clone = original2.cloneNode(true);
  clone.id = "repeatTHIStwo1" + ++x;
  original2.parentNode.appendChild(clone);
}

/*JAVASCRIPT FOR SUBJECT CHOICES*/

/*ENGINE TO RESET FORM DATA, AS WELL AS DROP DOWN DIV AND RESET*/
 function fun(){
   document.getElementById("subject_choice").reset();
   document.getElementById("exampleFormControlSelect1").disabled=false;
   /*NEED TO GIVE EACH BLOCK AND ID AND THEN*/
   document.getElementById("block_a").disabled=false;
   /*NEED TO GIVE EACH BLOCK AND ID AND THEN*/
   document.getElementById('subj-bloc-req').style.display = "none";
   document.getElementById('subj-bloc-req-0').style.display = "none";
   document.getElementById('subj-bloc-req-1').style.display = "none";



 }
function showDiv(select){
  /*ART*/
   if(select.value=='art-block-a'){
    document.getElementById('subj-bloc-req').style.display = "block";/*show div*/
    document.getElementById("exampleFormControlSelect1").disabled=true;/*disable dropdown*/
    /*NEED TO GIVE EACH BLOCK AND ID AND THEN*/
    document.getElementById("block_a").disabled=true;/*disable group_a*/
    /*NEED TO GIVE EACH BLOCK AND ID AND THEN*/

   }
   /*COMPUTING*/
    if(select.value=='computing-block-a'){
    document.getElementById('subj-bloc-req-0').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;/*disable dropdown*/
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*ENGLIGH LITERATURE*/
     if(select.value=='english-language-block-a'){
    document.getElementById('subj-bloc-req-1').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*HISTORY*/
     if(select.value=='history-block-a'){
    document.getElementById('subj-bloc-req-2').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*MATHS*/
     if(select.value=='maths-block-a'){
    document.getElementById('subj-bloc-req-3').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*PHYSICAL EDUCATION*/
     if(select.value=='physical-education-block-a'){
    document.getElementById('subj-bloc-req-4').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*PSYCHOLOGY*/
     if(select.value=='psychology-block-a'){
    document.getElementById('subj-bloc-req-5').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*BLOCK B SUBJECTS*/

   /*CHEMISTRY*/
     if(select.value=='chemistry-block-b'){
    document.getElementById('subj-bloc-req-6').style.display = "block";
    document.getElementById("exampleFormControlSelect2").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*BUSINESS STUDIES*/
     if(select.value=='business-studies-block-b'){
    document.getElementById('subj-bloc-req-7').style.display = "block";
    document.getElementById("exampleFormControlSelect2").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }
   /*ECONOMICS*/
     if(select.value=='economics-block-b'){
    document.getElementById('subj-bloc-req-8').style.display = "block";
    document.getElementById("exampleFormControlSelect2").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*ENGLISH LITERATURE*/
     if(select.value=='english-literature-block-b'){
    document.getElementById('subj-bloc-req-9').style.display = "block";
    document.getElementById("exampleFormControlSelect2").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*GEOGRAPHY*/
     if(select.value=='geography-block-b'){
    document.getElementById('subj-bloc-req-10').style.display = "block";
    document.getElementById("exampleFormControlSelect2").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*GERMAN*/
     if(select.value=='german-block-b'){
    document.getElementById('subj-bloc-req-11').style.display = "block";
    document.getElementById("exampleFormControlSelect2").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }

   /*PHYSICS*/
     if(select.value=='physics-block-b'){
    document.getElementById('subj-bloc-req-12').style.display = "block";
    document.getElementById("exampleFormControlSelect2").disabled=true;
    document.getElementById("block_a").disabled=true;/*disable group*/
   }


   /*BLOCK C SUBJECTS*/

   /*Biology*/
if(select.value=='biology-block-c'){
document.getElementById('subj-bloc-req-13').style.display = "block";
document.getElementById("exampleFormControlSelect3").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

if(select.value=='business-studies-block-c'){
document.getElementById('subj-bloc-req-14').style.display = "block";
document.getElementById("exampleFormControlSelect3").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
 }


 if(select.value=='chemistry-block-c'){
document.getElementById('subj-bloc-req-15').style.display = "block";
document.getElementById("exampleFormControlSelect3").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}


if(select.value=='economics-block-c'){
document.getElementById('subj-bloc-req-16').style.display = "block";
document.getElementById("exampleFormControlSelect3").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}


if(select.value=='french-block-c'){
document.getElementById('subj-bloc-req-17').style.display = "block";
document.getElementById("exampleFormControlSelect3").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}


if(select.value=='history-block-c'){
document.getElementById('subj-bloc-req-18').style.display = "block";
document.getElementById("exampleFormControlSelect3").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}


if(select.value=='maths-block-c'){
document.getElementById('subj-bloc-req-19').style.display = "block";
document.getElementById("exampleFormControlSelect3").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}


if(select.value=='sociology-block-c'){
document.getElementById('subj-bloc-req-20').style.display = "block";
document.getElementById("exampleFormControlSelect3").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}




/*BLOCK D SUBJECTS*/

/*Biology*/
if(select.value=='biology-block-d'){
document.getElementById('subj-bloc-req-21').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

if(select.value=='english-literature-block-d'){
document.getElementById('subj-bloc-req-22').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

if(select.value=='maths-block-d'){
document.getElementById('subj-bloc-req-23').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

if(select.value=='physical-education-block-d'){
document.getElementById('subj-bloc-req-24').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

if(select.value=='physics-block-d'){
document.getElementById('subj-bloc-req-25').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

if(select.value=='psychology-block-d'){
document.getElementById('subj-bloc-req-26').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

if(select.value=='religious-studies-block-d'){
document.getElementById('subj-bloc-req-27').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

if(select.value=='spanish-block-d'){
document.getElementById('subj-bloc-req-28').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}

/*BLOCK FM*/

/*FURTHER MATHS*/
if(select.value=='further_maths-block-fm'){
document.getElementById('subj-bloc-req-29').style.display = "block";
document.getElementById("exampleFormControlSelect4").disabled=true;
document.getElementById("block_a").disabled=true;/*disable group*/
}












}







/*JavaScript for data protection tray*/
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
